import z from "zod";
export declare const membershipSort: z.ZodEnum<["Biz", "Parent", "Student", "Teacher"]>;
export declare const membershipName: z.ZodEnum<["학원장", "학부모", "학생", "선생님"]>;
export declare const membershipPlan: z.ZodEnum<["Free", "Pro", "Unlimited"]>;
export declare const membershipSchema: z.ZodObject<{
    id: z.ZodString;
    sort: z.ZodEnum<["Biz", "Parent", "Student", "Teacher"]>;
    name: z.ZodEnum<["학원장", "학부모", "학생", "선생님"]>;
    plan: z.ZodEnum<["Free", "Pro", "Unlimited"]>;
    iat: z.ZodDefault<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
    exp: z.ZodDefault<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sort: "Biz" | "Parent" | "Student" | "Teacher";
    name: "학원장" | "학부모" | "학생" | "선생님";
    id: string;
    uid: string;
    plan: "Free" | "Pro" | "Unlimited";
    iat: number | null;
    exp: number | null;
}, {
    sort: "Biz" | "Parent" | "Student" | "Teacher";
    name: "학원장" | "학부모" | "학생" | "선생님";
    id: string;
    uid: string;
    plan: "Free" | "Pro" | "Unlimited";
    iat?: number | null | undefined;
    exp?: number | null | undefined;
}>;
export declare const membershipWithoutUidSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    sort: z.ZodEnum<["Biz", "Parent", "Student", "Teacher"]>;
    name: z.ZodEnum<["학원장", "학부모", "학생", "선생님"]>;
    plan: z.ZodEnum<["Free", "Pro", "Unlimited"]>;
    iat: z.ZodDefault<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
    exp: z.ZodDefault<z.ZodNullable<z.ZodDefault<z.ZodNumber>>>;
    uid: z.ZodString;
}, "uid">, "strip", z.ZodTypeAny, {
    sort: "Biz" | "Parent" | "Student" | "Teacher";
    name: "학원장" | "학부모" | "학생" | "선생님";
    id: string;
    plan: "Free" | "Pro" | "Unlimited";
    iat: number | null;
    exp: number | null;
}, {
    sort: "Biz" | "Parent" | "Student" | "Teacher";
    name: "학원장" | "학부모" | "학생" | "선생님";
    id: string;
    plan: "Free" | "Pro" | "Unlimited";
    iat?: number | null | undefined;
    exp?: number | null | undefined;
}>;
export type MembershipSort = z.infer<typeof membershipSort>;
export type MembershipName = z.infer<typeof membershipName>;
export type MembershipPlan = z.infer<typeof membershipPlan>;
export type MembershipWithUid = z.infer<typeof membershipSchema>;
export type Membership = z.infer<typeof membershipWithoutUidSchema>;
export declare const sampleMemberships: Membership[];
//# sourceMappingURL=membership.schema.d.ts.map