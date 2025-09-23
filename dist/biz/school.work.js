"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolPayloadSchema = exports.SchoolSchema = exports.SchoolEntitySchema = exports.SchoolLevelSchema = exports.SchoolSortSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.SchoolSortSchema = zod_1.z.enum([
    "어린이집/유치원",
    "초등학교",
    "중학교",
    "대학교",
    "직장",
    "직접입력",
]);
exports.SchoolLevelSchema = zod_1.z.enum([
    ...Array.from({ length: 6 }, (_, i) => `${i + 1}학년`),
    "직접입력",
]);
exports.SchoolEntitySchema = shared_1.SharedLinkedIntSchema.extend({
    sort: exports.SchoolSortSchema,
    desc: exports.SchoolLevelSchema.nullable(),
});
exports.SchoolSchema = exports.SchoolEntitySchema.omit({ uid: true });
exports.SchoolPayloadSchema = exports.SchoolSchema.omit({
    created_at: true,
    updated_at: true,
});
