import z from "zod"
import { dateWithIdSchema } from "./school.schema"

export const lessonSortSchema = z.enum(["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"])
export const lessonSubjectSchema = z.enum([
  "영어",
  "수학",
  "국어",
  "사회",
  "과학",
  "미술",
  "음악",
  "태권도",
  "검도",
  "유도",
  "합기도",
  "주짓수",
  "복싱",
  "무에타이",
  "킥복싱",
  "경호무술",
  "직접입력",
])

export const lessonSchema = dateWithIdSchema.extend({
  name: z.string(),
  sort: lessonSortSchema.or(z.string()),
  subject: lessonSubjectSchema.or(z.string()),
  uid: z.string(), //! connects user
})

export type LessonSort = z.infer<typeof lessonSortSchema>
export type LessonSubject = z.infer<typeof lessonSubjectSchema>
export type LessonWithUid = z.infer<typeof lessonSchema>

export const lessonWithoutUidSchema = lessonSchema.omit({ uid: true })
export type Lesson = z.infer<typeof lessonWithoutUidSchema>

export const lessonSorts: LessonSort[] = ["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]
export const lessonSubjects: LessonSubject[] = [
  "영어",
  "수학",
  "국어",
  "사회",
  "과학",
  "미술",
  "음악",
  "태권도",
  "검도",
  "유도",
  "합기도",
  "주짓수",
  "복싱",
  "무에타이",
  "킥복싱",
  "경호무술",
  "직접입력",
]
export const initialLesson: Lesson = { createdAt: new Date(), id: "", name: "", sort: "", subject: "" }
