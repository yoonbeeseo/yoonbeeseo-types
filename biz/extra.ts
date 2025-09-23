import { z } from "zod";
import { SharedLinkedUidSchema } from "../shared";
import { LessonSortSchema } from "./lesson";
import { SchoolSortSchema } from "./school.work";

export const ExtraSortSchema = LessonSortSchema.or(SchoolSortSchema);
export type ExtraSort = z.infer<typeof ExtraSortSchema>;

export const ExtraEntitySchema = SharedLinkedUidSchema.extend({
  sort: ExtraSortSchema.nullable(),
  price: z.number().min(0),
  quan: z.number().min(1),
  title: z.string(),
});

export type ExtraEntity = z.infer<typeof ExtraEntitySchema>;

export const ExtraSchema = ExtraEntitySchema.omit({ uid: true });

export type Extra = z.infer<typeof ExtraSchema>;

export const ExtraPayloadSchema = ExtraSchema.omit({
  created_at: true,
  updated_at: true,
});

export type ExtraPayload = z.infer<typeof ExtraPayloadSchema>;
