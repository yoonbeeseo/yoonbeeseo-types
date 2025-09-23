import { z } from "zod";
export declare const AddressSchema: z.ZodObject<{
    zipcode: z.ZodString;
    province: z.ZodString;
    city: z.ZodString;
    point: z.ZodString;
    road: z.ZodString;
    rest: z.ZodString;
    road_address: z.ZodString;
}, z.core.$strip>;
export type Address = z.infer<typeof AddressSchema>;
export declare const BizinfoEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type BizinfoEntity = z.infer<typeof BizinfoEntitySchema>;
export declare const BizinfoSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type Bizinfo = z.infer<typeof BizinfoSchema>;
export declare const BizinfoPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type BizinifoPayload = z.infer<typeof BizinfoPayloadSchema>;
