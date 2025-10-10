import { z } from "zod";
export declare const RelationshipSchema: z.ZodEnum<{
    직접입력: "직접입력";
    부: "부";
    모: "모";
    할아버지: "할아버지";
    할머니: "할머니";
}>;
export type Relationship = z.infer<typeof RelationshipSchema>;
export declare const ParentEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    relationship: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        부: "부";
        모: "모";
        할아버지: "할아버지";
        할머니: "할머니";
    }>, z.ZodString]>;
    mobile: z.ZodArray<z.ZodString>;
    has_agreed_privacy_policy: z.ZodNullable<z.ZodDate>;
    has_agreed_on_behalf: z.ZodNullable<z.ZodDate>;
    name: z.ZodString;
}, z.core.$strip>;
export declare const ParentSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    relationship: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        부: "부";
        모: "모";
        할아버지: "할아버지";
        할머니: "할머니";
    }>, z.ZodString]>;
    mobile: z.ZodArray<z.ZodString>;
    has_agreed_privacy_policy: z.ZodNullable<z.ZodDate>;
    has_agreed_on_behalf: z.ZodNullable<z.ZodDate>;
}, z.core.$strip>;
export type Parent = z.infer<typeof ParentSchema>;
export declare const ParentPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    relationship: z.ZodUnion<[z.ZodEnum<{
        직접입력: "직접입력";
        부: "부";
        모: "모";
        할아버지: "할아버지";
        할머니: "할머니";
    }>, z.ZodString]>;
    mobile: z.ZodArray<z.ZodString>;
    has_agreed_privacy_policy: z.ZodNullable<z.ZodDate>;
    has_agreed_on_behalf: z.ZodNullable<z.ZodDate>;
}, z.core.$strip>;
export type ParentPayload = z.infer<typeof ParentPayloadSchema>;
export declare const initialParent: ParentPayload;
