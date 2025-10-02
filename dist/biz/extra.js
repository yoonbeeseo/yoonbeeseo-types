"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialExtra = exports.ExtraPayloadSchema = exports.ExtraSchema = exports.ExtraEntitySchema = exports.ExtraSortSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const lesson_1 = require("./lesson");
const school_work_1 = require("./school.work");
exports.ExtraSortSchema = lesson_1.LessonSortSchema.or(school_work_1.SchoolSortSchema);
exports.ExtraEntitySchema = shared_1.SharedLinkedUidSchema.extend({
    sort: exports.ExtraSortSchema.nullable(),
    price: zod_1.z.number().min(0),
    quan: zod_1.z.number().min(1),
    title: zod_1.z.string(),
});
exports.ExtraSchema = exports.ExtraEntitySchema.omit({ uid: true });
exports.ExtraPayloadSchema = exports.ExtraSchema.omit({
    created_at: true,
    updated_at: true,
});
exports.initialExtra = {
    id: "",
    price: 0,
    quan: 1,
    sort: null,
    title: "",
};
