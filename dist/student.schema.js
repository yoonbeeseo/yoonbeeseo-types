"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialStoreStudentWithUid = exports.initialStoredStudent = exports.initialStudentWithUid = exports.initialStudent = exports.storedStudentWithoutUidSchema = exports.studentWithoutUidSchema = exports.storedStudentSchema = exports.studentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const school_schema_1 = require("./school.schema");
const parent_schema_1 = require("./parent.schema");
const lesson_schema_1 = require("./lesson.schema");
exports.studentSchema = school_schema_1.dateWithIdSchema.extend({
    uid: zod_1.default.string(),
    parents: zod_1.default.array(parent_schema_1.parentSchema).default([]),
    enrolledAt: zod_1.default.string(),
    name: zod_1.default.string(),
    dob: zod_1.default.string().length(8).nullable().default(null),
    mobile: zod_1.default.string().length(11).nullable().default(null),
    lessons: zod_1.default.array(lesson_schema_1.lessonSchema).default([]),
    schools: zod_1.default.array(school_schema_1.schoolSchema).default([]),
    paymentDate: zod_1.default.number().min(1).max(31),
    notes: zod_1.default.array(zod_1.default.object({ title: zod_1.default.string().optional(), body: zod_1.default.string(), id: zod_1.default.number() })),
    payments: zod_1.default.array(zod_1.default.any()).default([]),
});
exports.storedStudentSchema = exports.studentSchema.omit({ parents: true, lessons: true, schools: true, payments: true }).extend({
    parents: zod_1.default.array(zod_1.default.string().uuid()),
    lessons: zod_1.default.array(zod_1.default.string().uuid()),
    schools: zod_1.default.array(school_schema_1.schoolSchema.pick({ id: true, level: true })),
    payments: zod_1.default.array(zod_1.default.string().uuid()),
});
exports.studentWithoutUidSchema = exports.studentSchema.omit({ uid: true });
exports.storedStudentWithoutUidSchema = exports.storedStudentSchema.omit({ uid: true });
exports.initialStudent = {
    createdAt: new Date(),
    dob: null,
    enrolledAt: "",
    id: "",
    lessons: [],
    mobile: null,
    name: "",
    notes: [],
    parents: [],
    paymentDate: new Date().getDate(),
    payments: [],
    schools: [],
};
exports.initialStudentWithUid = {
    ...exports.initialStudent,
    uid: "",
};
exports.initialStoredStudent = {
    ...exports.initialStudent,
    lessons: [],
    parents: [],
    schools: [],
    notes: [],
    payments: [],
};
exports.initialStoreStudentWithUid = {
    ...exports.initialStoredStudent,
    uid: "",
};
