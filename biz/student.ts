import { z } from "zod";
import {
  ContactSchema,
  DobSchema,
  SharedLinkedIntSchema,
  SharedLinkedUidSchema,
} from "../shared";
import { ParentSchema } from "./parent";
import { LessonSchema } from "./lesson";
import { SchoolLevelSchema, SchoolSchema } from "./school.work";
import { AddressSchema, initialAddress } from "./bizinfo";

export const StudentMemoSchema = SharedLinkedIntSchema.extend({
  description: z.string(),
  is_important: z.boolean(),
  created_by: z.uuid(),
});

export type StudentMemo = z.infer<typeof StudentMemoSchema>;

export const StudentMemoEntitySchema = StudentMemoSchema.extend({
  uid: z.uuid(),
});
export type StudentMemoEntity = z.infer<typeof StudentMemoEntitySchema>;

export const StudentEntitySchema = SharedLinkedUidSchema.extend({
  name: z.string(),
  parents: z.array(z.uuid()),
  lessons: z.array(z.uuid()),
  schools: z.array(
    z.object({ id: z.uuid(), level: SchoolLevelSchema.nullable() })
  ),
  dob: DobSchema,
  enrolled_at: z.date(),
  payment_date: z.number().min(1).max(31),
  contacts: z.array(ContactSchema),
  address: AddressSchema,
  withdrawn_at: z.date().nullable(),
  memos: z.array(z.number()),
});

export type StudentEntity = z.infer<typeof StudentEntitySchema>;

export const StudentSchema = StudentEntitySchema.omit({
  uid: true,
  parents: true,
  lessons: true,
  schools: true,
  memeos: true,
}).extend({
  parents: z.array(ParentSchema),
  lessons: z.array(LessonSchema),
  schools: z.array(SchoolSchema),
  memos: z.array(StudentMemoSchema),
});

export type Studennt = z.infer<typeof StudentSchema>;

export const StudentPayloadSchema = StudentSchema.omit({
  created_at: true,
  updated_at: true,
});

export type StudentPayload = z.infer<typeof StudentPayloadSchema>;

export const initialStudent: StudentPayload = {
  address: initialAddress,
  contacts: [],
  dob: "",
  enrolled_at: new Date(),
  id: "",
  lessons: [],
  memos: [],
  name: "",
  parents: [],
  payment_date: 1,
  schools: [],
  withdrawn_at: null,
};
