import { z } from "zod";
import { SharedLinkedIntSchema } from "../shared";

export const MembershipSortSchema = z.enum([
  "Biz",
  "Teacher",
  "Parent",
  "Student",
]);

export type MembershipSort = z.infer<typeof MembershipSortSchema>;

export const MembershipPriceSchema = z.union([
  z.literal(0),
  z.literal(9900),
  z.literal(18900),
  z.literal(99000),
  z.literal(189000),
]);

export type MembershipPrice = z.infer<typeof MembershipPriceSchema>;

export const MembershipTypeSchema = z.enum(["Free", "Pro", "Unlimited"]);
export type MembershipType = z.infer<typeof MembershipTypeSchema>;

export const MembershipEntitySchema = SharedLinkedIntSchema.extend({
  sort: MembershipSortSchema.or(z.string()),
  price: MembershipPriceSchema,
  type: MembershipTypeSchema.or(z.string()),
  is_monthly: z.boolean(),
});

export type MemberhipEntity = z.infer<typeof MembershipEntitySchema>;

export const MembershipSchema = MembershipEntitySchema.omit({ uid: true });

export type Membership = z.infer<typeof MembershipSchema>;

export const MembershipPayloadSchema = MembershipSchema.omit({
  created_at: true,
  updated_at: true,
  id: true,
});

export type MembershipPayload = z.infer<typeof MembershipPayloadSchema>;

export const initialMembership: MembershipPayload = {
  is_monthly: true,
  price: 0,
  sort: "",
  type: "",
};
