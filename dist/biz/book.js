"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPayloadSchema = exports.BookSchema = exports.BookEntitySchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.BookEntitySchema = shared_1.SharedLinkedUidSchema.extend({
    value: shared_1.TelSchema,
    memos: zod_1.z.array(zod_1.z.string()),
    is_favorite: zod_1.z.boolean(),
    title: zod_1.z.string(),
    img_url: shared_1.ImageUrlSchema,
    is_student: zod_1.z.boolean().optional(),
});
exports.BookSchema = exports.BookEntitySchema.omit({ uid: true });
exports.BookPayloadSchema = exports.BookSchema.omit({
    created_at: true,
    updated_at: true,
});
