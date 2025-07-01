import z from "zod";
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
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    desc: string | null;
    uid: string;
    createdAt: Date;
    price: number;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
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
}, "uid">, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    desc: string | null;
    createdAt: Date;
    price: number;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    desc?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    price?: number | undefined;
}>;
export type Extra = z.infer<typeof extraWithoutUid>;
export declare const initialExtra: Extra;
//# sourceMappingURL=extra.schema.d.ts.map