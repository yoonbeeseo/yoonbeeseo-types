import { z } from "zod";
export declare const BookEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    value: z.ZodUnion<[z.ZodString, z.ZodString]>;
    memos: z.ZodArray<z.ZodString>;
    is_favorite: z.ZodBoolean;
    title: z.ZodString;
    img_url: z.ZodNullable<z.ZodURL>;
    is_student: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type BookEntity = z.infer<typeof BookEntitySchema>;
export declare const BookSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    value: z.ZodUnion<[z.ZodString, z.ZodString]>;
    is_student: z.ZodOptional<z.ZodBoolean>;
    is_favorite: z.ZodBoolean;
    title: z.ZodString;
    memos: z.ZodArray<z.ZodString>;
    img_url: z.ZodNullable<z.ZodURL>;
}, z.core.$strip>;
export type Book = z.infer<typeof BookSchema>;
export declare const BookPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    value: z.ZodUnion<[z.ZodString, z.ZodString]>;
    is_student: z.ZodOptional<z.ZodBoolean>;
    is_favorite: z.ZodBoolean;
    title: z.ZodString;
    memos: z.ZodArray<z.ZodString>;
    img_url: z.ZodNullable<z.ZodURL>;
}, z.core.$strip>;
export type BookPayload = z.infer<typeof BookPayloadSchema>;
