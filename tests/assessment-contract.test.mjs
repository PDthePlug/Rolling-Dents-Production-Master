import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

test("assessment persistence contract is present", async () => {
  const [schema, route, form, hosting] = await Promise.all([
    source("db/schema.ts"),
    source("app/api/assessments/route.ts"),
    source("components/rolling-dents/estimate-form.tsx"),
    source(".openai/hosting.json"),
  ]);

  assert.match(schema, /sqliteTable\(\s*["']assessments["']/);
  assert.match(schema, /sqliteTable\(\s*["']assessment_photos["']/);
  assert.match(route, /MAX_PHOTOS\s*=\s*6/);
  assert.match(route, /MEDIA/);
  assert.match(route, /storedPhotoCount/);
  assert.match(form, /fetch\(["']\/api\/assessments["']/);
  assert.match(form, /type="file"/);
  assert.match(form, /Submit & continue in WhatsApp/);

  const config = JSON.parse(hosting);
  assert.equal(config.d1, "DB");
  assert.equal(config.r2, "MEDIA");
});

test("conversion home links to the dedicated repair process", async () => {
  const [home, processPage, header] = await Promise.all([
    source("app/page.tsx"),
    source("app/repair-process/page.tsx"),
    source("components/rolling-dents/site-header.tsx"),
  ]);

  assert.match(home, /\/repair-process/);
  assert.doesNotMatch(home, /area-teaser/);
  assert.match(processPage, /Six stages\. One clear next step at a time\./);
  assert.match(header, /Repair Process/);
});
