import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

test("assessment produces an on-site reference before WhatsApp continuation", async () => {
  const [form, route, schema] = await Promise.all([
    source("components/rolling-dents/estimate-form.tsx"),
    source("app/api/assessments/route.ts"),
    source("db/schema.ts"),
  ]);

  assert.match(form, /ASSESSMENT RECEIVED/);
  assert.match(form, /Keep this repair reference/);
  assert.match(form, /Continue on WhatsApp/);
  assert.doesNotMatch(form, /window\.location\.assign/);
  assert.match(form, /Insurer/);
  assert.match(form, /Current claim status/);
  assert.match(route, /paymentRoute === "Insurance repair"/);
  assert.match(route, /claimStatus/);
  assert.match(schema, /claimNumber: text\("claim_number"\)/);
});

test("general enquiries are persisted separately with customer references", async () => {
  const [schema, route, form, contact, migration] = await Promise.all([
    source("db/schema.ts"),
    source("app/api/inquiries/route.ts"),
    source("components/rolling-dents/inquiry-form.tsx"),
    source("app/contact/page.tsx"),
    source("drizzle/0001_customer_conversion.sql"),
  ]);

  assert.match(schema, /sqliteTable\(\s*"inquiries"/);
  assert.match(route, /INQ-/);
  assert.match(route, /Consent is required/);
  assert.match(form, /ENQUIRY RECEIVED/);
  assert.match(form, /Existing repair/);
  assert.match(contact, /<InquiryForm \/>/);
  assert.match(migration, /CREATE TABLE `inquiries`/);
});

test("failed customer submissions preserve a visible WhatsApp fallback", async () => {
  const [estimate, inquiry] = await Promise.all([
    source("components/rolling-dents/estimate-form.tsx"),
    source("components/rolling-dents/inquiry-form.tsx"),
  ]);
  assert.match(estimate, /Continue in WhatsApp/);
  assert.match(estimate, /fallbackHref/);
  assert.match(inquiry, /Continue in WhatsApp/);
  assert.match(inquiry, /fallbackHref/);
});
