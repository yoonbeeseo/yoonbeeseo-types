import z from "zod";
export declare const bizinfoSchema: z.ZodObject<{
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
    address: string;
    desc: string | null;
    ceo: string;
    regi: string;
    emails: string[];
    tels: string[];
    sns: string[];
    uid: string;
}, {
    name: string;
    address: string;
    ceo: string;
    regi: string;
    uid: string;
    desc?: string | null | undefined;
    emails?: string[] | undefined;
    tels?: string[] | undefined;
    sns?: string[] | undefined;
}>;
export type BizinfoWithUid = z.infer<typeof bizinfoSchema>;
export declare const bizinfoWithoutUidSchema: z.ZodObject<Omit<{
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
    address: string;
    desc: string | null;
    ceo: string;
    regi: string;
    emails: string[];
    tels: string[];
    sns: string[];
}, {
    name: string;
    address: string;
    ceo: string;
    regi: string;
    desc?: string | null | undefined;
    emails?: string[] | undefined;
    tels?: string[] | undefined;
    sns?: string[] | undefined;
}>;
export type Bizinfo = z.infer<typeof bizinfoWithoutUidSchema>;
export declare const initialBizinfo: Bizinfo;
//# sourceMappingURL=bizinfo.schema.d.ts.map