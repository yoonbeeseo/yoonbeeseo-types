import z from "zod"
import { dateWithIdSchema, schoolSortSchema } from "./school.schema"
import { lessonSortSchema } from "./lesson.schema"

export const extraSortSchema = lessonSortSchema.and(schoolSortSchema)

export const extraSchema = dateWithIdSchema.extend({
  name: z.string(),
  price: z.number().min(0).default(0),
  desc: z.string().nullable().default(null),
  uid: z.string(), //! connects user
  sort: extraSortSchema.nullable().default(null),
})

export type ExtraWithUid = z.infer<typeof extraSchema>

export const extraWithoutUid = extraSchema.omit({ uid: true })

export type Extra = z.infer<typeof extraWithoutUid>

export const initialExtra: Extra = {
  createdAt: new Date(),
  desc: null,
  id: "",
  name: "",
  price: 0,
  sort: null,
}
