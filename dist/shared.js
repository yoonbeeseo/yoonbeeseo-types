"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUrlSchema = exports.ContactSchema = exports.DobSchema = exports.EmailSchema = exports.TelSchema = exports.MobileSchema = exports.SharedLinkedIntSchema = exports.SharedIntSchema = exports.SharedLinkedUidSchema = exports.SharedUniqueSchema = void 0;
const zod_1 = require("zod");
exports.SharedUniqueSchema = zod_1.z.object({
    id: zod_1.z.uuid(),
    created_at: zod_1.z.date(),
    updated_at: zod_1.z.date(),
});
exports.SharedLinkedUidSchema = exports.SharedUniqueSchema.extend({
    uid: zod_1.z.uuid(),
});
exports.SharedIntSchema = exports.SharedUniqueSchema.omit({ id: true }).extend({
    id: zod_1.z.number(),
});
exports.SharedLinkedIntSchema = exports.SharedIntSchema.extend({ uid: zod_1.z.uuid() });
exports.MobileSchema = zod_1.z.string().length(11);
exports.TelSchema = exports.MobileSchema.or(zod_1.z.string());
exports.EmailSchema = zod_1.z.email();
exports.DobSchema = zod_1.z.string().length(8);
exports.ContactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    is_student: zod_1.z.boolean(),
    value: exports.TelSchema,
    is_favorite: zod_1.z.boolean(),
});
exports.ImageUrlSchema = zod_1.z.url().nullable();
