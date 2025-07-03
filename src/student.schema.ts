import z from "zod"
import { dateWithIdSchema, schoolSchema } from "./school.schema"
import { parentSchema } from "./parent.schema"
import { lessonSchema } from "./lesson.schema"

export const studentSchema = dateWithIdSchema.extend({
  uid: z.string(),
  parents: z.array(parentSchema).default([]),
  enrolledAt: z.string(),
  name: z.string(),
  dob: z.string().length(8).nullable().default(null),
  mobile: z.string().length(11).nullable().default(null),
  lessons: z.array(lessonSchema).default([]),
  schools: z.array(schoolSchema).default([]),
  paymentDate: z.number().min(1).max(31),
  notes: z.array(z.object({ title: z.string().optional(), body: z.string(), id: z.number() })),
  payments: z.array(z.any()).default([]),
})

export const storedStudentSchema = studentSchema.omit({ parents: true, lessons: true, schools: true, payments: true }).extend({
  parents: z.array(z.string().uuid()),
  lessons: z.array(z.string().uuid()),
  schools: z.array(schoolSchema.pick({ id: true, level: true })),
  payments: z.array(z.string().uuid()),
})

export const studentWithoutUidSchema = studentSchema.omit({ uid: true })
export const storedStudentWithoutUidSchema = storedStudentSchema.omit({ uid: true })

export type StudentWithUid = z.infer<typeof studentSchema>
export type Student = z.infer<typeof studentWithoutUidSchema>
export type StoredStudentWithUid = z.infer<typeof storedStudentSchema>
export type StoredStudent = z.infer<typeof storedStudentWithoutUidSchema>

export const initialStudent: Student = {
  createdAt: new Date(),
  dob: null,
  enrolledAt: "",
  id: "",
  lessons: [],
  mobile: null,
  name: "",
  notes: [],
  parents: [],
  paymentDate: new Date().getDate(),
  payments: [],
  schools: [],
}

export const initialStudentWithUid: StudentWithUid = {
  ...initialStudent,
  uid: "",
}

export const initialStoredStudent: StoredStudent = {
  ...initialStudent,
  lessons: [],
  parents: [],
  schools: [],
  notes: [],
  payments: [],
}

export const initialStoreStudentWithUid: StoredStudentWithUid = {
  ...initialStoredStudent,
  uid: "",
}
