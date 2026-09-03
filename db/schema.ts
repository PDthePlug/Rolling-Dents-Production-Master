import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const assessments = sqliteTable(
  "assessments",
  {
    id: text("id").primaryKey(),
    reference: text("reference").notNull().unique(),
    status: text("status").notNull().default("new"),
    customerName: text("customer_name").notNull(),
    mobile: text("mobile").notNull(),
    email: text("email").notNull().default(""),
    vehicleYear: text("vehicle_year").notNull(),
    vehicleMake: text("vehicle_make").notNull(),
    vehicleModel: text("vehicle_model").notNull(),
    registration: text("registration").notNull().default(""),
    repairType: text("repair_type").notNull(),
    paymentRoute: text("payment_route").notNull(),
    insurer: text("insurer").notNull().default(""),
    claimNumber: text("claim_number").notNull().default(""),
    claimStatus: text("claim_status").notNull().default(""),
    description: text("description").notNull(),
    source: text("source").notNull().default("website"),
    photoCount: integer("photo_count").notNull().default(0),
    privacyConsentAt: text("privacy_consent_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("assessments_status_idx").on(table.status),
    index("assessments_created_at_idx").on(table.createdAt),
    index("assessments_mobile_idx").on(table.mobile),
  ],
);

export const assessmentPhotos = sqliteTable(
  "assessment_photos",
  {
    id: text("id").primaryKey(),
    assessmentId: text("assessment_id").notNull().references(() => assessments.id, { onDelete: "cascade" }),
    objectKey: text("object_key").notNull().unique(),
    originalName: text("original_name").notNull(),
    contentType: text("content_type").notNull(),
    sizeBytes: integer("size_bytes").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [index("assessment_photos_assessment_id_idx").on(table.assessmentId)],
);

export const inquiries = sqliteTable(
  "inquiries",
  {
    id: text("id").primaryKey(),
    reference: text("reference").notNull().unique(),
    status: text("status").notNull().default("received"),
    customerName: text("customer_name").notNull(),
    mobile: text("mobile").notNull(),
    email: text("email").notNull().default(""),
    topic: text("topic").notNull(),
    relatedReference: text("related_reference").notNull().default(""),
    message: text("message").notNull(),
    source: text("source").notNull().default("website"),
    privacyConsentAt: text("privacy_consent_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("inquiries_status_idx").on(table.status),
    index("inquiries_created_at_idx").on(table.createdAt),
    index("inquiries_mobile_idx").on(table.mobile),
  ],
);
