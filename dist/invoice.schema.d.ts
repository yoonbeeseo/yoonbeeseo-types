import z from "zod";
export declare const invoiceItemSchema: z.ZodObject<{
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
}>;
export declare const invoiceSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    id: string;
    body: string[];
    title: string;
    items: {
        name: string;
        price: number;
        quan: number;
        totalPrice: number;
    }[];
    uid: string;
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
    uid: string;
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
}>;
export declare const invoiceWithoutUidSchema: z.ZodObject<Omit<{
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
}>;
export declare const bizInvoiceSchema: z.ZodObject<Omit<Omit<{
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
}, "uid">, "bizinfo">, "strip", z.ZodTypeAny, {
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
    updatedAt?: Date | undefined;
}, {
    id: string;
    title: string;
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
}>;
export type InvoiceItem = z.infer<typeof invoiceItemSchema>;
export type InvoiceWithUid = z.infer<typeof invoiceSchema>;
export type Invoice = z.infer<typeof invoiceWithoutUidSchema>;
export type BizInvoice = z.infer<typeof bizInvoiceSchema>;
export declare const initialInvoiceItem: InvoiceItem;
export declare const initialInvoice: BizInvoice;
//# sourceMappingURL=invoice.schema.d.ts.map