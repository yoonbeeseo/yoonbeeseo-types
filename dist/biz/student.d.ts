import { z } from "zod";
export declare const StudentMemoSchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    uid: z.ZodUUID;
    description: z.ZodString;
    is_important: z.ZodBoolean;
    created_by: z.ZodUUID;
}, z.core.$strip>;
export type StudentMemo = z.infer<typeof StudentMemoSchema>;
export declare const StudentMemoEntitySchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    description: z.ZodString;
    is_important: z.ZodBoolean;
    created_by: z.ZodUUID;
    uid: z.ZodUUID;
}, z.core.$strip>;
export type StudentMemoEntity = z.infer<typeof StudentMemoEntitySchema>;
export declare const StudentEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    name: z.ZodString;
    parents: z.ZodArray<z.ZodUUID>;
    lessons: z.ZodArray<z.ZodUUID>;
    schools: z.ZodArray<z.ZodObject<{
        id: z.ZodUUID;
        level: z.ZodNullable<z.ZodEnum<{
            [x: string]: string;
        }>>;
    }, z.core.$strip>>;
    dob: z.ZodString;
    enrolled_at: z.ZodDate;
    payment_date: z.ZodNumber;
    contacts: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        is_student: z.ZodBoolean;
        value: z.ZodUnion<[z.ZodString, z.ZodString]>;
        is_favorite: z.ZodBoolean;
    }, z.core.$strip>>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    withdrawn_at: z.ZodNullable<z.ZodDate>;
    memos: z.ZodArray<z.ZodNumber>;
}, z.core.$strip>;
export type StudentEntity = z.infer<typeof StudentEntitySchema>;
export declare const StudentSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    dob: z.ZodString;
    enrolled_at: z.ZodDate;
    payment_date: z.ZodNumber;
    contacts: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        is_student: z.ZodBoolean;
        value: z.ZodUnion<[z.ZodString, z.ZodString]>;
        is_favorite: z.ZodBoolean;
    }, z.core.$strip>>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    withdrawn_at: z.ZodNullable<z.ZodDate>;
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
    memos: z.ZodArray<z.ZodObject<{
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        id: z.ZodNumber;
        uid: z.ZodUUID;
        description: z.ZodString;
        is_important: z.ZodBoolean;
        created_by: z.ZodUUID;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Studennt = z.infer<typeof StudentSchema>;
export declare const StudentPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
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
    dob: z.ZodString;
    enrolled_at: z.ZodDate;
    payment_date: z.ZodNumber;
    contacts: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        is_student: z.ZodBoolean;
        value: z.ZodUnion<[z.ZodString, z.ZodString]>;
        is_favorite: z.ZodBoolean;
    }, z.core.$strip>>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    withdrawn_at: z.ZodNullable<z.ZodDate>;
    memos: z.ZodArray<z.ZodObject<{
        created_at: z.ZodDate;
        updated_at: z.ZodDate;
        id: z.ZodNumber;
        uid: z.ZodUUID;
        description: z.ZodString;
        is_important: z.ZodBoolean;
        created_by: z.ZodUUID;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StudentPayload = z.infer<typeof StudentPayloadSchema>;
export declare const initialStudent: StudentPayload;
