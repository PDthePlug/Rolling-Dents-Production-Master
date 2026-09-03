ALTER TABLE `assessments` ADD `insurer` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `assessments` ADD `claim_number` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `assessments` ADD `claim_status` text DEFAULT '' NOT NULL;
--> statement-breakpoint
CREATE TABLE `inquiries` (
  `id` text PRIMARY KEY NOT NULL,
  `reference` text NOT NULL,
  `status` text DEFAULT 'received' NOT NULL,
  `customer_name` text NOT NULL,
  `mobile` text NOT NULL,
  `email` text DEFAULT '' NOT NULL,
  `topic` text NOT NULL,
  `related_reference` text DEFAULT '' NOT NULL,
  `message` text NOT NULL,
  `source` text DEFAULT 'website' NOT NULL,
  `privacy_consent_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `inquiries_reference_unique` ON `inquiries` (`reference`);
--> statement-breakpoint
CREATE INDEX `inquiries_status_idx` ON `inquiries` (`status`);
--> statement-breakpoint
CREATE INDEX `inquiries_created_at_idx` ON `inquiries` (`created_at`);
--> statement-breakpoint
CREATE INDEX `inquiries_mobile_idx` ON `inquiries` (`mobile`);
