import { z } from "zod";
export declare const UserEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    mobile: z.ZodNullable<z.ZodString>;
    email: z.ZodEmail;
    dob: z.ZodNullable<z.ZodString>;
    profile_url: z.ZodNullable<z.ZodURL>;
}, z.core.$strip>;
export type UserEntity = z.infer<typeof UserEntitySchema>;
export declare const UserSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    mobile: z.ZodNullable<z.ZodString>;
    email: z.ZodEmail;
    dob: z.ZodNullable<z.ZodString>;
    profile_url: z.ZodNullable<z.ZodURL>;
    bizinfos: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        name: z.ZodString;
        address: z.ZodObject<{
            zipcode: z.ZodString;
            province: z.ZodString;
            city: z.ZodString;
            point: z.ZodString;
            road: z.ZodString;
            rest: z.ZodString;
            road_address: z.ZodString;
        }, z.core.$strip>;
        ceo: z.ZodString;
        regi: z.ZodString;
        tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        emails: z.ZodArray<z.ZodEmail>;
        subjects: z.ZodArray<z.ZodEnum<{
            영어: "영어";
            국어: "국어";
            수학: "수학";
            직접입력: "직접입력";
        }>>;
    }, z.core.$strip>>;
    lessons: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        sort: z.ZodUnion<[z.ZodEnum<{
            유치부: "유치부";
            초등부: "초등부";
            중등부: "중등부";
            고등부: "고등부";
            성인부: "성인부";
        }>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<{
            영어: "영어";
            국어: "국어";
            수학: "수학";
            직접입력: "직접입력";
        }>, z.ZodString]>;
        price: z.ZodNumber;
        length: z.ZodNumber;
        count_per_week: z.ZodNumber;
        name: z.ZodString;
    }, z.core.$strip>>;
    schools: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    parents: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    extras: z.ZodArray<z.ZodObject<{
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
            고등학교: "고등학교";
        }>]>>;
        price: z.ZodNumber;
        quan: z.ZodNumber;
        title: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
export declare const UserPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    dob: z.ZodNullable<z.ZodString>;
    mobile: z.ZodNullable<z.ZodString>;
    email: z.ZodEmail;
    profile_url: z.ZodNullable<z.ZodURL>;
}, z.core.$strip>;
export type UserPayload = z.infer<typeof UserPayloadSchema>;
