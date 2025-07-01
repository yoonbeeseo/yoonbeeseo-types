import z from "zod";
export declare const bareUserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    dob: string | null;
}, {
    name: string;
    id: string;
    mobile?: string | null | undefined;
    dob?: string | null | undefined;
}>;
export declare const bareUserWithoutIdSchema: z.ZodObject<Omit<{
    id: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "id">, "strip", z.ZodTypeAny, {
    name: string;
    mobile: string | null;
    dob: string | null;
}, {
    name: string;
    mobile?: string | null | undefined;
    dob?: string | null | undefined;
}>;
export declare const userSchema: z.ZodIntersection<z.ZodObject<{
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
} & {
    bizinfo: z.ZodDefault<z.ZodNullable<z.ZodObject<{
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
    }>>>;
    parents: z.ZodArray<z.ZodObject<Omit<{
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
    }, "uid">, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        mobile: string | null;
        createdAt: Date;
        relationship: string;
        hasConsent: boolean;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        relationship: string;
        mobile?: string | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        hasConsent?: boolean | undefined;
    }>, "many">;
    schools: z.ZodArray<z.ZodObject<Omit<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodDefault<z.ZodUnion<[z.ZodEnum<["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]>, z.ZodString]>>;
        level: z.ZodDefault<z.ZodNullable<z.ZodUnion<[z.ZodEnum<["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]>, z.ZodString]>>>;
        uid: z.ZodString;
    }, "uid">, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        level: string | null;
        updatedAt?: Date | undefined;
    }, {
        name: string;
        id: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }>, "many">;
    templates: z.ZodArray<z.ZodObject<Omit<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        title: z.ZodString;
        body: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        targetIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        items: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            quan: z.ZodDefault<z.ZodNumber>;
            price: z.ZodDefault<z.ZodNumber>;
            totalPrice: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            price: number;
            quan: number;
            totalPrice: number;
        }, {
            name: string;
            price?: number | undefined;
            quan?: number | undefined;
            totalPrice?: number | undefined;
        }>, "many">>;
        uid: z.ZodString;
        bizinfo: z.ZodObject<{
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
    }, "uid">, "strip", z.ZodTypeAny, {
        id: string;
        body: string[];
        title: string;
        items: {
            name: string;
            price: number;
            quan: number;
            totalPrice: number;
        }[];
        createdAt: Date;
        targetIds: string[];
        bizinfo: {
            name: string;
            address: string;
            desc: string | null;
            ceo: string;
            regi: string;
            emails: string[];
            tels: string[];
            sns: string[];
            uid: string;
        };
        updatedAt?: Date | undefined;
    }, {
        id: string;
        title: string;
        bizinfo: {
            name: string;
            address: string;
            ceo: string;
            regi: string;
            uid: string;
            desc?: string | null | undefined;
            emails?: string[] | undefined;
            tels?: string[] | undefined;
            sns?: string[] | undefined;
        };
        body?: string[] | undefined;
        items?: {
            name: string;
            price?: number | undefined;
            quan?: number | undefined;
            totalPrice?: number | undefined;
        }[] | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        targetIds?: string[] | undefined;
    }>, "many">;
    lessons: z.ZodArray<z.ZodObject<Omit<{
        createdAt: z.ZodDefault<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    } & {
        id: z.ZodString;
    } & {
        name: z.ZodString;
        sort: z.ZodUnion<[z.ZodEnum<["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]>, z.ZodString]>;
        subject: z.ZodUnion<[z.ZodEnum<["영어", "수학", "국어", "사회", "과학", "미술", "음악", "태권도", "검도", "유도", "합기도", "주짓수", "복싱", "무에타이", "킥복싱", "경호무술", "직접입력"]>, z.ZodString]>;
        uid: z.ZodString;
    }, "uid">, "strip", z.ZodTypeAny, {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        subject: string;
        updatedAt?: Date | undefined;
    }, {
        sort: string;
        name: string;
        id: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    createdAt: Date;
    bizinfo: {
        name: string;
        address: string;
        desc: string | null;
        ceo: string;
        regi: string;
        emails: string[];
        tels: string[];
        sns: string[];
        uid: string;
    } | null;
    parents: {
        name: string;
        id: string;
        mobile: string | null;
        createdAt: Date;
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
        updatedAt?: Date | undefined;
    }[];
    templates: {
        id: string;
        body: string[];
        title: string;
        items: {
            name: string;
            price: number;
            quan: number;
            totalPrice: number;
        }[];
        createdAt: Date;
        targetIds: string[];
        bizinfo: {
            name: string;
            address: string;
            desc: string | null;
            ceo: string;
            regi: string;
            emails: string[];
            tels: string[];
            sns: string[];
            uid: string;
        };
        updatedAt?: Date | undefined;
    }[];
    lessons: {
        sort: string;
        name: string;
        id: string;
        createdAt: Date;
        subject: string;
        updatedAt?: Date | undefined;
    }[];
    updatedAt?: Date | undefined;
}, {
    parents: {
        name: string;
        id: string;
        relationship: string;
        mobile?: string | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        hasConsent?: boolean | undefined;
    }[];
    schools: {
        name: string;
        id: string;
        sort?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        level?: string | null | undefined;
    }[];
    templates: {
        id: string;
        title: string;
        bizinfo: {
            name: string;
            address: string;
            ceo: string;
            regi: string;
            uid: string;
            desc?: string | null | undefined;
            emails?: string[] | undefined;
            tels?: string[] | undefined;
            sns?: string[] | undefined;
        };
        body?: string[] | undefined;
        items?: {
            name: string;
            price?: number | undefined;
            quan?: number | undefined;
            totalPrice?: number | undefined;
        }[] | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        targetIds?: string[] | undefined;
    }[];
    lessons: {
        sort: string;
        name: string;
        id: string;
        subject: string;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[];
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    bizinfo?: {
        name: string;
        address: string;
        ceo: string;
        regi: string;
        uid: string;
        desc?: string | null | undefined;
        emails?: string[] | undefined;
        tels?: string[] | undefined;
        sns?: string[] | undefined;
    } | null | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    dob: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    mobile: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    mobile: string | null;
    dob: string | null;
}, {
    name: string;
    id: string;
    mobile?: string | null | undefined;
    dob?: string | null | undefined;
}>>;
export type BareUser = z.infer<typeof bareUserSchema>;
export type BareUserWithoutId = z.infer<typeof bareUserWithoutIdSchema>;
export type User = z.infer<typeof userSchema>;
export declare const initialBareUserWithoutId: BareUserWithoutId;
export declare const initialBareUser: BareUser;
export declare const initialUser: User;
//# sourceMappingURL=user.schema.d.ts.map