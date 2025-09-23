import { z } from "zod";

export const SharedUniqueSchema = z.object({
  id: z.uuid(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const SharedLinkedUidSchema = SharedUniqueSchema.extend({
  uid: z.uuid(),
});

export const SharedIntSchema = SharedUniqueSchema.omit({ id: true }).extend({
  id: z.number(),
});

export const SharedLinkedIntSchema = SharedIntSchema.extend({ uid: z.uuid() });

export const MobileSchema = z.string().length(11);

export const TelSchema = MobileSchema.or(z.string());

export const EmailSchema = z.email();

export const DobSchema = z.string().length(8);

export const ContactSchema = z.object({
  id: z.number(),
  is_student: z.boolean(),
  value: TelSchema,
  is_favorite: z.boolean(),
});

export type ContactProps = z.infer<typeof ContactSchema>;

export const ImageUrlSchema = z.url().nullable();
