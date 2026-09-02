import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function assertSourceMetadataContract() {
  const [layout, rollingDents] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/rolling-dents.ts", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /AutoBodyShop/);
  assert.match(layout, /LocalBusiness/);
  assert.match(layout, /\+27 11 794 2454/);
  assert.match(rollingDents, /Rolling Dents/);
  assert.doesNotMatch(layout, /codex-preview/i);
}

test("renders production metadata and local business schema", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);

  let worker;
  try {
    ({ default: worker } = await import(workerUrl.href));
  } catch (error) {
    // Once the application uses Cloudflare-native bindings such as D1/R2,
    // the built server graph can contain the `cloudflare:` module protocol.
    // Plain Node does not implement that protocol, so fall back to validating
    // the source metadata contract rather than weakening production bindings.
    if (
      error?.code === "ERR_UNSUPPORTED_ESM_URL_SCHEME" &&
      String(error?.message ?? "").includes("cloudflare:")
    ) {
      await assertSourceMetadataContract();
      return;
    }
    throw error;
  }

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();

  assert.match(html, /<title>[^<]*Rolling Dents[^<]*<\/title>/i);
  assert.match(html, /rel=["']canonical["']/i);
  assert.match(html, /AutoBodyShop/);
  assert.match(html, /LocalBusiness/);
  assert.match(html, /011 794 2454/);
  assert.doesNotMatch(html, /codex-preview/i);
});
