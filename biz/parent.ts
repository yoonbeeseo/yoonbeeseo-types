import { z } from "zod";
import { MobileSchema, SharedLinkedUidSchema } from "../shared";

export const RelationshipSchema = z.enum([
  "부",
  "모",
  "할아버지",
  "할머니",
  "직접입력",
]);

export type Relationship = z.infer<typeof RelationshipSchema>;

export const ParentEntitySchema = SharedLinkedUidSchema.extend({
  relationship: RelationshipSchema,
  mobile: z.array(MobileSchema),
  has_agreed_privacy_policy: z.date().nullable(),
  has_agreed_on_behalf: z.date().nullable(),
  name: z.string(),
});

export const ParentSchema = ParentEntitySchema.omit({ uid: true });
export type Parent = z.infer<typeof ParentSchema>;

export const ParentPayloadSchema = ParentSchema.omit({
  created_at: true,
  updated_at: true,
});

export type ParentPayload = z.infer<typeof ParentPayloadSchema>;
