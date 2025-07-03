import z from "zod";
export declare const studentSchema: z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    uid: z.ZodString;
    parents: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        createdAt: Date;
        uid: string;
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
    }>, "many">>;
    enrolledAt: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    lessons: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }, {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>, "many">>;
    schools: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }>, "many">>;
    paymentDate: z.ZodNumber;
    notes: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        body: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        body: string;
        title?: string | undefined;
    }, {
        id: number;
        body: string;
        title?: string | undefined;
    }>, "many">;
    payments: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    createdAt: Date;
    uid: string;
    dob: string | null;
    parents: {
        name: string;
        id: string;
        mobile: string | null;
        createdAt: Date;
        uid: string;
        relationship: string;
        hasConsent: boolean;
        updatedAt?: Date | undefined;
    }[];
    schools: {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }[];
    lessons: {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: any[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    dob?: string | null | undefined;
    parents?: {
        name: string;
        id: string;
        uid: string;
        relationship: string;
        mobile?: string | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        hasConsent?: boolean | undefined;
    }[] | undefined;
    schools?: {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }[] | undefined;
    lessons?: {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[] | undefined;
    payments?: any[] | undefined;
}>;
export declare const storedStudentSchema: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    uid: z.ZodString;
    parents: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        createdAt: Date;
        uid: string;
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
    }>, "many">>;
    enrolledAt: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    lessons: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }, {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>, "many">>;
    schools: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }>, "many">>;
    paymentDate: z.ZodNumber;
    notes: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        body: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        body: string;
        title?: string | undefined;
    }, {
        id: number;
        body: string;
        title?: string | undefined;
    }>, "many">;
    payments: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "parents" | "schools" | "lessons" | "payments"> & {
    parents: z.ZodArray<z.ZodString, "many">;
    lessons: z.ZodArray<z.ZodString, "many">;
    schools: z.ZodArray<z.ZodObject<Pick<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "id" | "level">, "strip", z.ZodTypeAny, {
        id: string;
        level: string | null;
    }, {
        id: string;
        level?: string | null | undefined;
    }>, "many">;
    payments: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    createdAt: Date;
    uid: string;
    dob: string | null;
    parents: string[];
    schools: {
        id: string;
        level: string | null;
    }[];
    lessons: string[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: string[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    uid: string;
    parents: string[];
    schools: {
        id: string;
        level?: string | null | undefined;
    }[];
    lessons: string[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: string[];
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    dob?: string | null | undefined;
}>;
export declare const studentWithoutUidSchema: z.ZodObject<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    uid: z.ZodString;
    parents: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        createdAt: Date;
        uid: string;
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
    }>, "many">>;
    enrolledAt: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    lessons: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }, {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>, "many">>;
    schools: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }>, "many">>;
    paymentDate: z.ZodNumber;
    notes: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        body: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        body: string;
        title?: string | undefined;
    }, {
        id: number;
        body: string;
        title?: string | undefined;
    }>, "many">;
    payments: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "uid">, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    createdAt: Date;
    dob: string | null;
    parents: {
        name: string;
        id: string;
        mobile: string | null;
        createdAt: Date;
        uid: string;
        relationship: string;
        hasConsent: boolean;
        updatedAt?: Date | undefined;
    }[];
    schools: {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }[];
    lessons: {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: any[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    dob?: string | null | undefined;
    parents?: {
        name: string;
        id: string;
        uid: string;
        relationship: string;
        mobile?: string | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        hasConsent?: boolean | undefined;
    }[] | undefined;
    schools?: {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }[] | undefined;
    lessons?: {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[] | undefined;
    payments?: any[] | undefined;
}>;
export declare const storedStudentWithoutUidSchema: z.ZodObject<Omit<Omit<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    id: z.ZodString;
} & {
    uid: z.ZodString;
    parents: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        createdAt: Date;
        uid: string;
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
    }>, "many">>;
    enrolledAt: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    lessons: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        uid: string;
        subject: string;
        updatedAt?: Date | undefined;
    }, {
        sort: string;
        name: string;
        id: string;
        uid: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>, "many">>;
    schools: z.ZodDefault<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        uid: string;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        uid: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }>, "many">>;
    paymentDate: z.ZodNumber;
    notes: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        body: z.ZodString;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        body: string;
        title?: string | undefined;
    }, {
        id: number;
        body: string;
        title?: string | undefined;
    }>, "many">;
    payments: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
}, "parents" | "schools" | "lessons" | "payments"> & {
    parents: z.ZodArray<z.ZodString, "many">;
    lessons: z.ZodArray<z.ZodString, "many">;
    schools: z.ZodArray<z.ZodObject<Pick<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "id" | "level">, "strip", z.ZodTypeAny, {
        id: string;
        level: string | null;
    }, {
        id: string;
        level?: string | null | undefined;
    }>, "many">;
    payments: z.ZodArray<z.ZodString, "many">;
}, "uid">, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    createdAt: Date;
    dob: string | null;
    parents: string[];
    schools: {
        id: string;
        level: string | null;
    }[];
    lessons: string[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: string[];
    updatedAt?: Date | undefined;
}, {
    name: string;
    id: string;
    parents: string[];
    schools: {
        id: string;
        level?: string | null | undefined;
    }[];
    lessons: string[];
    enrolledAt: string;
    paymentDate: number;
    notes: {
        id: number;
        body: string;
        title?: string | undefined;
    }[];
    payments: string[];
    mobile?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    dob?: string | null | undefined;
}>;
export type StudentWithUid = z.infer<typeof studentSchema>;
export type Student = z.infer<typeof studentWithoutUidSchema>;
export type StoredStudentWithUid = z.infer<typeof storedStudentSchema>;
export type StoredStudent = z.infer<typeof storedStudentWithoutUidSchema>;
export declare const initialStudent: Student;
export declare const initialStudentWithUid: StudentWithUid;
export declare const initialStoredStudent: StoredStudent;
export declare const initialStoreStudentWithUid: StoredStudentWithUid;
//# sourceMappingURL=student.schema.d.ts.map