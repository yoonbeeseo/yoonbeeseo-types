"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPayloadSchema = exports.StudentSchema = exports.StudentEntitySchema = exports.StudentMemoEntitySchema = exports.StudentMemoSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const parent_1 = require("./parent");
const lesson_1 = require("./lesson");
const school_work_1 = require("./school.work");
const bizinfo_1 = require("./bizinfo");
exports.StudentMemoSchema = shared_1.SharedLinkedIntSchema.extend({
    desc: zod_1.z.string(),
    is_important: zod_1.z.boolean(),
    created_by: zod_1.z.uuid(),
});
exports.StudentMemoEntitySchema = exports.StudentMemoSchema.extend({
    uid: zod_1.z.uuid(),
});
exports.StudentEntitySchema = shared_1.SharedLinkedUidSchema.extend({
    name: zod_1.z.string(),
    parents: zod_1.z.array(zod_1.z.uuid()),
    lessons: zod_1.z.array(zod_1.z.uuid()),
    schools: zod_1.z.array(zod_1.z.object({ id: zod_1.z.uuid(), level: school_work_1.SchoolLevelSchema.nullable() })),
    dob: shared_1.DobSchema,
    enrolled_at: zod_1.z.date(),
    payment_date: zod_1.z.number().min(1).max(31),
    contacts: zod_1.z.array(shared_1.ContactSchema),
    address: bizinfo_1.AddressSchema,
    withdrawn_at: zod_1.z.date().nullable(),
    memos: zod_1.z.array(zod_1.z.number()),
});
exports.StudentSchema = exports.StudentEntitySchema.omit({
    uid: true,
    parents: true,
    lessons: true,
    schools: true,
    memeos: true,
}).extend({
    parents: zod_1.z.array(parent_1.ParentSchema),
    lessons: zod_1.z.array(lesson_1.LessonSchema),
    schools: zod_1.z.array(school_work_1.SchoolSchema),
    memos: zod_1.z.array(exports.StudentMemoSchema),
});
exports.StudentPayloadSchema = exports.StudentSchema.omit({
    created_at: true,
    updated_at: true,
});
