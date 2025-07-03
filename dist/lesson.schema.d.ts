import z from "zod";
export declare const lessonSortSchema: z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>;
export declare const lessonSubjectSchema: z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>;
export declare const lessonSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
    subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sort: string;
    name: string;
    id: string;
    createdAt: Date;
    uid: string;
    subject: string;
    updatedAt?: Date | undefined;
}, {
    sort: string;
    name: string;
    id: string;
    uid: string;
    subject: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export type LessonSort = z.infer<typeof lessonSortSchema>;
export type LessonSubject = z.infer<typeof lessonSubjectSchema>;
export type LessonWithUid = z.infer<typeof lessonSchema>;
export declare const lessonWithoutUidSchema: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
    subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
    uid: z.ZodString;
}, "uid">, "strip", z.ZodTypeAny, {
    sort: string;
    name: string;
    id: string;
    createdAt: Date;
    subject: string;
    updatedAt?: Date | undefined;
}, {
    sort: string;
    name: string;
    id: string;
    subject: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export type Lesson = z.infer<typeof lessonWithoutUidSchema>;
export declare const lessonSorts: LessonSort[];
export declare const lessonSubjects: LessonSubject[];
export declare const initialLesson: Lesson;
//# sourceMappingURL=lesson.schema.d.ts.map