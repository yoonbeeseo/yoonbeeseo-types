import { z } from "zod";
import {
  DobSchema,
  EmailSchema,
  ImageUrlSchema,
  MobileSchema,
  SharedUniqueSchema,
} from "./shared";
import {
  BizinfoSchema,
  ExtraSchema,
  LessonSchema,
  ParentSchema,
  SchoolSchema,
} from "./biz";

export const UserEntitySchema = SharedUniqueSchema.extend({
  name: z.string(),
  mobile: MobileSchema.nullable(),
  email: EmailSchema,
  dob: DobSchema.nullable(),
  profile_url: ImageUrlSchema,
});

export type UserEntity = z.infer<typeof UserEntitySchema>;

export const UserSchema = UserEntitySchema.extend({
  bizinfos: z.array(BizinfoSchema),
  lessons: z.array(LessonSchema),
  schools: z.array(SchoolSchema),
  parents: z.array(ParentSchema),
  extras: z.array(ExtraSchema),
});

export type User = z.infer<typeof UserSchema>;

export const UserPayloadSchema = UserEntitySchema.omit({
  created_at: true,
  updated_at: true,
});

export type UserPayload = z.infer<typeof UserPayloadSchema>;
