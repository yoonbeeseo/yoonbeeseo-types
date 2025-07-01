import z from "zod";
export declare const relationshipSchema: z.ZodEnum<["부", "모", "할머니", "할아버지", "직접입력"]>;
export declare const parentSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    relationship: z.ZodUnion<[z.ZodEnum<["부", "모", "할머니", "할아버지", "직접입력"]>, z.ZodString]>;
    hasConsent: z.ZodDefault<z.ZodBoolean>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    uid: string;
    createdAt: Date;
    relationship: string;
    hasConsent: boolean;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
    relationship: string;
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    hasConsent?: boolean | undefined;
}>;
export type ParentRelationship = z.infer<typeof relationshipSchema>;
export type ParentWithUid = z.infer<typeof parentSchema>;
export declare const parentWithoutUid: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    relationship: z.ZodUnion<[z.ZodEnum<["부", "모", "할머니", "할아버지", "직접입력"]>, z.ZodString]>;
    hasConsent: z.ZodDefault<z.ZodBoolean>;
    uid: z.ZodString;
}, "uid">, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    createdAt: Date;
    relationship: string;
    hasConsent: boolean;
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    relationship: string;
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    hasConsent?: boolean | undefined;
}>;
export type Parent = z.infer<typeof parentWithoutUid>;
export declare const parentRelationships: ParentRelationship[];
export declare const initialParent: Parent;
//# sourceMappingURL=parent.schema.d.ts.map