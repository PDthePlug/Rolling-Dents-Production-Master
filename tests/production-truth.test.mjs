import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

async function source(file) { return readFile(new URL(`../${file}`, import.meta.url), "utf8"); }

async function collectSourceFiles(directory) {
  const root = new URL(`../${directory}/`, import.meta.url);
  const out = [];
  async function walk(dirUrl, relative) {
    const entries = await readdir(dirUrl, { withFileTypes: true });
    for (const entry of entries) {
      const childRelative = path.posix.join(relative, entry.name);
      const childUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, dirUrl);
      if (entry.isDirectory()) await walk(childUrl, childRelative);
      else if (/\.(ts|tsx)$/.test(entry.name)) out.push(childRelative);
    }
  }
  await walk(root, directory);
  return out;
}

test("production truth contract removes unverified public claims and agency fingerprints", async () => {
  const files = [
    ...(await collectSourceFiles("app")),
    ...(await collectSourceFiles("components/rolling-dents")),
    "lib/rolling-dents.ts",
  ];
  for (const file of files) {
    const text = await source(file);
    assert.doesNotMatch(text, /RMI[- ]approved/i, `${file} contains an unverified RMI claim`);
    assert.doesNotMatch(text, /PDCONNECT/i, `${file} contains agency/demo attribution`);
  }
});

test("canonical service catalogue matches the seven published Rolling Dents services", async () => {
  const text = await source("lib/rolling-dents.ts");
  const serviceBlock = text.split("export const services: Service[] = [")[1].split("export const serviceAreas")[0];
  const slugs = [...serviceBlock.matchAll(/slug: \"([^\"]+)\"/g)].map((match) => match[1]);
  assert.deepEqual(slugs, [
    "paint-shop",
    "full-vehicle-resprays",
    "paintless-dent-removal",
    "parts-replacement",
    "paint-correction",
    "vehicle-detailing",
    "classic-restoration",
  ]);
});

test("navigation and canonical URL are centrally controlled", async () => {
  const [lib, header, footer, sitemap] = await Promise.all([
    source("lib/rolling-dents.ts"),
    source("components/rolling-dents/site-header.tsx"),
    source("components/rolling-dents/site-footer.tsx"),
    source("app/sitemap.ts"),
  ]);
  assert.match(lib, /process\.env\.NEXT_PUBLIC_SITE_URL/);
  assert.match(lib, /Repair Process/);
  assert.match(header, /import \{ navigation,/);
  assert.match(footer, /navigation,/);
  assert.doesNotMatch(header, /const navigation\s*=/);
  assert.match(sitemap, /\/repair-process/);
});

test("customer-facing Rolling Dents pages use optimized static images", async () => {
  const files = [
    ...(await collectSourceFiles("app")),
    ...(await collectSourceFiles("components/rolling-dents")),
  ];
  for (const file of files) {
    const text = await source(file);
    assert.doesNotMatch(text, /<img\s/i, `${file} still contains a raw img element`);
  }
});
