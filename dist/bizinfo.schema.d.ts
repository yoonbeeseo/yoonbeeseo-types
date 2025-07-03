import z from "zod";
export declare const bizinfoSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    emails: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    tels: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    sns: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    address: z.ZodString;
    desc: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    uid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    address: string;
    desc: string | null;
    createdAt: Date;
    uid: string;
    ceo: string;
    regi: string;
    emails: string[];
    tels: string[];
    sns: string[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    address: string;
    uid: string;
    ceo: string;
    regi: string;
    desc?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    emails?: string[] | undefined;
    tels?: string[] | undefined;
    sns?: string[] | undefined;
}>;
export type BizinfoWithUid = z.infer<typeof bizinfoSchema>;
export declare const bizinfoWithoutUidSchema: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    emails: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    tels: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    sns: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    address: z.ZodString;
    desc: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    uid: z.ZodString;
}, "uid">, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    address: string;
    desc: string | null;
    createdAt: Date;
    ceo: string;
    regi: string;
    emails: string[];
    tels: string[];
    sns: string[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    address: string;
    ceo: string;
    regi: string;
    desc?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    emails?: string[] | undefined;
    tels?: string[] | undefined;
    sns?: string[] | undefined;
}>;
export type Bizinfo = z.infer<typeof bizinfoWithoutUidSchema>;
export declare const initialBizinfo: Bizinfo;
//# sourceMappingURL=bizinfo.schema.d.ts.map