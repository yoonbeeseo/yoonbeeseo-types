import { z } from "zod";
export declare const MembershipSortSchema: z.ZodEnum<{
    Biz: "Biz";
    Teacher: "Teacher";
    Parent: "Parent";
    Student: "Student";
}>;
export type MembershipSort = z.infer<typeof MembershipSortSchema>;
export declare const MembershipPriceSchema: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<9900>, z.ZodLiteral<18900>, z.ZodLiteral<99000>, z.ZodLiteral<189000>]>;
export type MembershipPrice = z.infer<typeof MembershipPriceSchema>;
export declare const MembershipTypeSchema: z.ZodEnum<{
    Free: "Free";
    Pro: "Pro";
    Unlimited: "Unlimited";
}>;
export type MembershipType = z.infer<typeof MembershipTypeSchema>;
export declare const MembershipEntitySchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    uid: z.ZodUUID;
    iat: z.ZodNumber;
    exp: z.ZodNumber;
    sort: z.ZodUnion<[z.ZodEnum<{
        Biz: "Biz";
        Teacher: "Teacher";
        Parent: "Parent";
        Student: "Student";
    }>, z.ZodString]>;
    price: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<9900>, z.ZodLiteral<18900>, z.ZodLiteral<99000>, z.ZodLiteral<189000>]>;
    type: z.ZodUnion<[z.ZodEnum<{
        Free: "Free";
        Pro: "Pro";
        Unlimited: "Unlimited";
    }>, z.ZodString]>;
    is_monthly: z.ZodBoolean;
}, z.core.$strip>;
export type MemberhipEntity = z.infer<typeof MembershipEntitySchema>;
export declare const MembershipSchema: z.ZodObject<{
    id: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    iat: z.ZodNumber;
    exp: z.ZodNumber;
    sort: z.ZodUnion<[z.ZodEnum<{
        Biz: "Biz";
        Teacher: "Teacher";
        Parent: "Parent";
        Student: "Student";
    }>, z.ZodString]>;
    price: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<9900>, z.ZodLiteral<18900>, z.ZodLiteral<99000>, z.ZodLiteral<189000>]>;
    type: z.ZodUnion<[z.ZodEnum<{
        Free: "Free";
        Pro: "Pro";
        Unlimited: "Unlimited";
    }>, z.ZodString]>;
    is_monthly: z.ZodBoolean;
}, z.core.$strip>;
export type Membership = z.infer<typeof MembershipSchema>;
export declare const MembershipPayloadSchema: z.ZodObject<{
    iat: z.ZodNumber;
    exp: z.ZodNumber;
    sort: z.ZodUnion<[z.ZodEnum<{
        Biz: "Biz";
        Teacher: "Teacher";
        Parent: "Parent";
        Student: "Student";
    }>, z.ZodString]>;
    price: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<9900>, z.ZodLiteral<18900>, z.ZodLiteral<99000>, z.ZodLiteral<189000>]>;
    type: z.ZodUnion<[z.ZodEnum<{
        Free: "Free";
        Pro: "Pro";
        Unlimited: "Unlimited";
    }>, z.ZodString]>;
    is_monthly: z.ZodBoolean;
}, z.core.$strip>;
export type MembershipPayload = z.infer<typeof MembershipPayloadSchema>;
export declare const initialMembership: MembershipPayload;
