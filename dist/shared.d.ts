import { z } from "zod";
export declare const SharedUniqueSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
}, z.core.$strip>;
export declare const SharedLinkedUidSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
}, z.core.$strip>;
export declare const SharedIntSchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const SharedLinkedIntSchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    uid: z.ZodUUID;
}, z.core.$strip>;
export declare const MobileSchema: z.ZodString;
export declare const TelSchema: z.ZodUnion<[z.ZodString, z.ZodString]>;
export declare const EmailSchema: z.ZodEmail;
export declare const DobSchema: z.ZodString;
export declare const ContactSchema: z.ZodObject<{
    id: z.ZodNumber;
    is_student: z.ZodBoolean;
    value: z.ZodUnion<[z.ZodString, z.ZodString]>;
    is_favorite: z.ZodBoolean;
}, z.core.$strip>;
export type ContactProps = z.infer<typeof ContactSchema>;
export declare const ImageUrlSchema: z.ZodNullable<z.ZodURL>;
