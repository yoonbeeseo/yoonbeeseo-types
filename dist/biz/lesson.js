"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPayloadSchema = exports.LessonSchema = exports.LessonEntitySchema = exports.LessonPriceSchema = exports.LessonSubjectSchema = exports.LessonSortSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.LessonSortSchema = zod_1.z.enum([
    "유치부",
    "초등부",
    "중등부",
    "고등부",
    "성인부",
]);
exports.LessonSubjectSchema = zod_1.z.enum(["영어", "국어", "수학", "직접입력"]);
exports.LessonPriceSchema = zod_1.z.object({
    perMonth: zod_1.z.number().min(0),
    length: zod_1.z.number().min(0),
    countPerWeek: zod_1.z.number().min(0),
});
exports.LessonEntitySchema = shared_1.SharedLinkedIntSchema.extend({
    sort: exports.LessonSortSchema,
    subject: exports.LessonSubjectSchema.or(zod_1.z.string()),
    price: exports.LessonPriceSchema,
});
exports.LessonSchema = exports.LessonEntitySchema.omit({ uid: true });
exports.LessonPayloadSchema = exports.LessonSchema.omit({
    created_at: true,
    updated_at: true,
});
