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

export const UserSchema = SharedUniqueSchema.extend({
  name: z.string(),
  mobile: MobileSchema,
  email: EmailSchema,
  dob: DobSchema,
  profile_url: ImageUrlSchema,

  bizinfos: z.array(BizinfoSchema),
  lessons: z.array(LessonSchema),
  schools: z.array(SchoolSchema),
  parents: z.array(ParentSchema),
  extras: z.array(ExtraSchema),
});

export type User = z.infer<typeof UserSchema>;

export const UserPayloadSchema = UserSchema.omit({
  created_at: true,
  updated_at: true,
});

export type UserPayload = z.infer<typeof UserPayloadSchema>;
