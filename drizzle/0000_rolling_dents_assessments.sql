CREATE TABLE `assessments` (
  `id` text PRIMARY KEY NOT NULL,
  `reference` text NOT NULL,
  `status` text DEFAULT 'new' NOT NULL,
  `customer_name` text NOT NULL,
  `mobile` text NOT NULL,
  `email` text DEFAULT '' NOT NULL,
  `vehicle_year` text NOT NULL,
  `vehicle_make` text NOT NULL,
  `vehicle_model` text NOT NULL,
  `registration` text DEFAULT '' NOT NULL,
  `repair_type` text NOT NULL,
  `payment_route` text NOT NULL,
  `description` text NOT NULL,
  `source` text DEFAULT 'website' NOT NULL,
  `photo_count` integer DEFAULT 0 NOT NULL,
  `privacy_consent_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `assessments_reference_unique` ON `assessments` (`reference`);
--> statement-breakpoint
CREATE INDEX `assessments_status_idx` ON `assessments` (`status`);
--> statement-breakpoint
CREATE INDEX `assessments_created_at_idx` ON `assessments` (`created_at`);
--> statement-breakpoint
CREATE INDEX `assessments_mobile_idx` ON `assessments` (`mobile`);
--> statement-breakpoint
CREATE TABLE `assessment_photos` (
  `id` text PRIMARY KEY NOT NULL,
  `assessment_id` text NOT NULL,
  `object_key` text NOT NULL,
  `original_name` text NOT NULL,
  `content_type` text NOT NULL,
  `size_bytes` integer NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (`assessment_id`) REFERENCES `assessments`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `assessment_photos_object_key_unique` ON `assessment_photos` (`object_key`);
--> statement-breakpoint
CREATE INDEX `assessment_photos_assessment_id_idx` ON `assessment_photos` (`assessment_id`);
