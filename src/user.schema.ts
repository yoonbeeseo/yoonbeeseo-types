import z from "zod"

import { bizinfoSchema } from "./bizinfo.schema"
import { parentWithoutUid } from "./parent.schema"
import { dateSchema, schoolWithoutUid } from "./school.schema"
import { invoiceWithoutUidSchema } from "./invoice.schema"
import { lessonWithoutUidSchema } from "./lesson.schema"

export const bareUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  dob: z.string().length(8).nullable().default(null),
  mobile: z.string().length(11).nullable().default(null),
  profile_img: z.string().url().nullable().default(null),
  email: z.string().email(),
})

export const bareUserWithoutIdSchema = bareUserSchema.omit({ id: true })

export const userSchema = dateSchema
  .extend({
    bizinfo: bizinfoSchema.nullable().default(null),
    parents: z.array(parentWithoutUid),
    schools: z.array(schoolWithoutUid),
    templates: z.array(invoiceWithoutUidSchema),
    lessons: z.array(lessonWithoutUidSchema),
  })
  .and(bareUserSchema)

export type BareUser = z.infer<typeof bareUserSchema>
export type BareUserWithoutId = z.infer<typeof bareUserWithoutIdSchema>
export type User = z.infer<typeof userSchema>

export const initialBareUserWithoutId: BareUserWithoutId = {
  dob: null,
  mobile: null,
  name: "윤비서",
  profile_img: null,
  email: "",
}
export const initialBareUser: BareUser = {
  ...initialBareUserWithoutId,
  id: "",
}
export const initialUser: User = {
  ...initialBareUser,
  bizinfo: null,
  createdAt: new Date(),
  lessons: [],
  parents: [],
  schools: [],
  templates: [],
}
