import z from "zod";
export declare const schoolSortSchema: z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>;
export declare const schoolLevelSchema: z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>;
export declare const dateSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    createdAt: Date;
    updatedAt?: Date | undefined;
}, {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export declare const dateWithIdSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt?: Date | undefined;
}, {
    id: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export declare const schoolSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
    level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sort: string;
    name: string;
    id: string;
    createdAt: Date;
    level: string | null;
    uid: string;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
    sort?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    level?: string | null | undefined;
}>;
export type SchoolSort = z.infer<typeof schoolSortSchema>;
export type SchoolLevel = z.infer<typeof schoolLevelSchema>;
export type SchoolWithUid = z.infer<typeof schoolSchema>;
export declare const schoolWithoutUid: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
    level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
    uid: z.ZodString;
}, "uid">, "strip", z.ZodTypeAny, {
    sort: string;
    name: string;
    id: string;
    createdAt: Date;
    level: string | null;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    sort?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    level?: string | null | undefined;
}>;
export type School = z.infer<typeof schoolWithoutUid>;
export declare const schoolSorts: SchoolSort[];
export declare const schoolLevels: SchoolLevel[];
export declare const initialSchoolWithoutUid: School;
//# sourceMappingURL=school.schema.d.ts.map