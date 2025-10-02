"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialLesson = exports.LessonPayloadSchema = exports.LessonSchema = exports.LessonEntitySchema = exports.LessonSubjectSchema = exports.lessonSorts = exports.LessonSortSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.LessonSortSchema = zod_1.z.enum([
    "유치부",
    "초등부",
    "중등부",
    "고등부",
    "성인부",
]);
exports.lessonSorts = [
    "유치부",
    "초등부",
    "중등부",
    "고등부",
    "성인부",
];
exports.LessonSubjectSchema = zod_1.z.enum(["영어", "국어", "수학", "직접입력"]);
exports.LessonEntitySchema = shared_1.SharedLinkedIntSchema.extend({
    sort: exports.LessonSortSchema.or(zod_1.z.string()),
    subject: exports.LessonSubjectSchema.or(zod_1.z.string()),
    price: zod_1.z.number().min(0),
    length: zod_1.z.number().min(0),
    count_per_week: zod_1.z.number().min(0),
    name: zod_1.z.string(),
});
exports.LessonSchema = exports.LessonEntitySchema.omit({ uid: true });
exports.LessonPayloadSchema = exports.LessonSchema.omit({
    created_at: true,
    updated_at: true,
});
exports.initialLesson = {
    count_per_week: 1,
    id: 0,
    length: 1,
    price: 0,
    sort: "",
    subject: "",
};
