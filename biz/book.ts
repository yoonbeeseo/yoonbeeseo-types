import { z } from "zod";
import { ImageUrlSchema, SharedLinkedUidSchema, TelSchema } from "../shared";

export const BookEntitySchema = SharedLinkedUidSchema.extend({
  value: TelSchema,
  memos: z.array(z.string()),
  is_favorite: z.boolean(),
  title: z.string(),
  img_url: ImageUrlSchema,
  is_student: z.boolean().optional(),
});

export type BookEntity = z.infer<typeof BookEntitySchema>;

export const BookSchema = BookEntitySchema.omit({ uid: true });
export type Book = z.infer<typeof BookSchema>;

export const BookPayloadSchema = BookSchema.omit({
  created_at: true,
  updated_at: true,
});

export type BookPayload = z.infer<typeof BookPayloadSchema>;
