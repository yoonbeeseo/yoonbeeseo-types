import { z } from "zod";
import { SharedLinkedIntSchema } from "../shared";

export const SchoolSortSchema = z.enum([
  "어린이집/유치원",
  "초등학교",
  "중학교",
  "대학교",
  "직장",
  "고등학교",
  "직접입력",
]);

export type SchoolSort = z.infer<typeof SchoolSortSchema>;

export const schoolSorts: SchoolSort[] = [
  "어린이집/유치원",
  "초등학교",
  "중학교",
  "대학교",
  "고등학교",
  "직장",
];

export const SchoolLevelSchema = z.enum([
  ...Array.from({ length: 6 }, (_, i) => `${i + 1}학년`),
  "직접입력",
]);

export type SchoolLevel = z.infer<typeof SchoolLevelSchema>;

export const schoolLevels: SchoolLevel[] = [
  "1학년",
  "2학년",
  "3학년",
  "4학년",
  "5학년",
  "6학년",
];

export const SchoolEntitySchema = SharedLinkedIntSchema.extend({
  sort: SchoolSortSchema.or(z.string()),
  description: SchoolLevelSchema.nullable(),
  name: z.string(),
  level: SchoolLevelSchema.nullable(),
});

export type SchoolEntity = z.infer<typeof SchoolEntitySchema>;

export const SchoolSchema = SchoolEntitySchema.omit({ uid: true });

export type School = z.infer<typeof SchoolSchema>;

export const SchoolPayloadSchema = SchoolSchema.omit({
  created_at: true,
  updated_at: true,
});

export type SchoolPayload = z.infer<typeof SchoolPayloadSchema>;

export const initialSchool: SchoolPayload = {
  description: null,
  id: 0,
  name: "",
  sort: "",
  level: null,
};
