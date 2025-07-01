import z from "zod"

export const schoolSortSchema = z.enum(["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"])
export const schoolLevelSchema = z.enum(["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"])

export const dateSchema = z.object({
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().optional(),
})

export const dateWithIdSchema = dateSchema.extend({
  id: z.string().uuid(),
})

export const schoolSchema = dateWithIdSchema.extend({
  name: z.string(),
  sort: schoolSortSchema.or(z.string()).default(""),
  level: schoolLevelSchema.or(z.string()).nullable().default(null),
  uid: z.string(), //! connects user
})

export type SchoolSort = z.infer<typeof schoolSortSchema>
export type SchoolLevel = z.infer<typeof schoolLevelSchema>
export type SchoolWithUid = z.infer<typeof schoolSchema>

export const schoolWithoutUid = schoolSchema.omit({ uid: true })
export type School = z.infer<typeof schoolWithoutUid>

export const schoolSorts: SchoolSort[] = ["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]
export const schoolLevels: SchoolLevel[] = ["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]
export const initialSchoolWithoutUid: School = {
  createdAt: new Date(),
  id: "",
  level: null,
  name: "",
  sort: "",
}
