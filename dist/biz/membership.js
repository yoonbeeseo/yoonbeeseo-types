"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialMembership = exports.MembershipPayloadSchema = exports.MembershipSchema = exports.MembershipEntitySchema = exports.MembershipTypeSchema = exports.MembershipPriceSchema = exports.MembershipSortSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.MembershipSortSchema = zod_1.z.enum([
    "Biz",
    "Teacher",
    "Parent",
    "Student",
]);
exports.MembershipPriceSchema = zod_1.z.union([
    zod_1.z.literal(0),
    zod_1.z.literal(9900),
    zod_1.z.literal(18900),
    zod_1.z.literal(99000),
    zod_1.z.literal(189000),
]);
exports.MembershipTypeSchema = zod_1.z.enum(["Free", "Pro", "Unlimited"]);
exports.MembershipEntitySchema = shared_1.SharedLinkedIntSchema.extend({
    sort: exports.MembershipSortSchema.or(zod_1.z.string()),
    price: exports.MembershipPriceSchema,
    type: exports.MembershipTypeSchema.or(zod_1.z.string()),
    is_monthly: zod_1.z.boolean(),
});
exports.MembershipSchema = exports.MembershipEntitySchema.omit({ uid: true });
exports.MembershipPayloadSchema = exports.MembershipSchema.omit({
    created_at: true,
    updated_at: true,
    id: true,
});
exports.initialMembership = {
    is_monthly: true,
    price: 0,
    sort: "",
    type: "",
};
