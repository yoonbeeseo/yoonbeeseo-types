import { z } from "zod";
export declare const SchoolSortSchema: z.ZodEnum<{
    직접입력: "직접입력";
    "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
    초등학교: "초등학교";
    중학교: "중학교";
    대학교: "대학교";
    직장: "직장";
    고등학교: "고등학교";
}>;
export type SchoolSort = z.infer<typeof SchoolSortSchema>;
export declare const schoolSorts: SchoolSort[];
export declare const SchoolLevelSchema: z.ZodEnum<{
    [x: string]: string;
}>;
export type SchoolLevel = z.infer<typeof SchoolLevelSchema>;
export declare const schoolLevels: SchoolLevel[];
export declare const SchoolEntitySchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    uid: z.ZodUUID;
    sort: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
        고등학교: "고등학교";
    }>, z.ZodString]>;
    description: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
    name: z.ZodString;
    level: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type SchoolEntity = z.infer<typeof SchoolEntitySchema>;
export declare const SchoolSchema: z.ZodObject<{
    id: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    sort: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
        고등학교: "고등학교";
    }>, z.ZodString]>;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
    level: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type School = z.infer<typeof SchoolSchema>;
export declare const SchoolPayloadSchema: z.ZodObject<{
    id: z.ZodNumber;
    sort: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
        고등학교: "고등학교";
    }>, z.ZodString]>;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
    level: z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>;
}, z.core.$strip>;
export type SchoolPayload = z.infer<typeof SchoolPayloadSchema>;
export declare const initialSchool: SchoolPayload;
