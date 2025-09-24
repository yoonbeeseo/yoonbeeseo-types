import { z } from "zod";
export declare const ExtraSortSchema: z.ZodUnion<[z.ZodEnum<{
    유치부: "유치부";
    초등부: "초등부";
    중등부: "중등부";
    고등부: "고등부";
    성인부: "성인부";
}>, z.ZodEnum<{
    직접입력: "직접입력";
    "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
    초등학교: "초등학교";
    중학교: "중학교";
    대학교: "대학교";
    직장: "직장";
}>]>;
export type ExtraSort = z.infer<typeof ExtraSortSchema>;
export declare const ExtraEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    sort: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>, z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
    }>]>>;
    price: z.ZodNumber;
    quan: z.ZodNumber;
    title: z.ZodString;
}, z.core.$strip>;
export type ExtraEntity = z.infer<typeof ExtraEntitySchema>;
export declare const ExtraSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    sort: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>, z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
    }>]>>;
    price: z.ZodNumber;
    quan: z.ZodNumber;
    title: z.ZodString;
}, z.core.$strip>;
export type Extra = z.infer<typeof ExtraSchema>;
export declare const ExtraPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    sort: z.ZodNullable<z.ZodUnion<[z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>, z.ZodEnum<{
        직접입력: "직접입력";
        "\uC5B4\uB9B0\uC774\uC9D1/\uC720\uCE58\uC6D0": "어린이집/유치원";
        초등학교: "초등학교";
        중학교: "중학교";
        대학교: "대학교";
        직장: "직장";
    }>]>>;
    price: z.ZodNumber;
    quan: z.ZodNumber;
    title: z.ZodString;
}, z.core.$strip>;
export type ExtraPayload = z.infer<typeof ExtraPayloadSchema>;
