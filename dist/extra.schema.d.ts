import z from "zod";
export declare const extraSortSchema: z.ZodIntersection<z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>>;
export declare const extraSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    price: z.ZodDefault<z.ZodNumber>;
    desc: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    uid: z.ZodString;
    sort: z.ZodDefault<z.ZodNullable<z.ZodIntersection<z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>>>>;
}, "strip", z.ZodTypeAny, {
    sort: "직접입력" | null;
    name: string;
    id: string;
    desc: string | null;
    createdAt: Date;
    uid: string;
    price: number;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
    sort?: "직접입력" | null | undefined;
    desc?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    price?: number | undefined;
}>;
export type ExtraWithUid = z.infer<typeof extraSchema>;
export declare const extraWithoutUid: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    price: z.ZodDefault<z.ZodNumber>;
    desc: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    uid: z.ZodString;
    sort: z.ZodDefault<z.ZodNullable<z.ZodIntersection<z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>>>>;
}, "uid">, "strip", z.ZodTypeAny, {
    sort: "직접입력" | null;
    name: string;
    id: string;
    desc: string | null;
    createdAt: Date;
    price: number;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    sort?: "직접입력" | null | undefined;
    desc?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    price?: number | undefined;
}>;
export type Extra = z.infer<typeof extraWithoutUid>;
export declare const initialExtra: Extra;
//# sourceMappingURL=extra.schema.d.ts.map