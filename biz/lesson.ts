import { z } from "zod";
import { SharedLinkedIntSchema } from "../shared";

export const LessonSortSchema = z.enum([
  "유치부",
  "초등부",
  "중등부",
  "고등부",
  "성인부",
]);

export type LessonSort = z.infer<typeof LessonSortSchema>;

export const LessonSubjectSchema = z.enum(["영어", "국어", "수학", "직접입력"]);

export type LessonSubject = z.infer<typeof LessonSubjectSchema>;

export const LessonPriceSchema = z.object({
  perMonth: z.number().min(0),
  length: z.number().min(0),
  countPerWeek: z.number().min(0),
});

export type LessonPrice = z.infer<typeof LessonPriceSchema>;

export const LessonEntitySchema = SharedLinkedIntSchema.extend({
  sort: LessonSortSchema,
  subject: LessonSubjectSchema.or(z.string()),
  price: LessonPriceSchema,
});

export type LessonEntity = z.infer<typeof LessonEntitySchema>;

export const LessonSchema = LessonEntitySchema.omit({ uid: true });

export type Lesson = z.infer<typeof LessonSchema>;

export const LessonPayloadSchema = LessonSchema.omit({
  created_at: true,
  updated_at: true,
});

export type LessonPayload = z.infer<typeof LessonPayloadSchema>;
