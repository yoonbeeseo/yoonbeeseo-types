"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialUser = exports.initialBareUser = exports.initialBareUserWithoutId = exports.userSchema = exports.bareUserWithoutIdSchema = exports.bareUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const bizinfo_schema_1 = require("./bizinfo.schema");
const parent_schema_1 = require("./parent.schema");
const school_schema_1 = require("./school.schema");
const invoice_schema_1 = require("./invoice.schema");
const lesson_schema_1 = require("./lesson.schema");
exports.bareUserSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    name: zod_1.default.string(),
    dob: zod_1.default.string().length(8).nullable().default(null),
    mobile: zod_1.default.string().length(11).nullable().default(null),
});
exports.bareUserWithoutIdSchema = exports.bareUserSchema.omit({ id: true });
exports.userSchema = school_schema_1.dateSchema
    .extend({
    bizinfo: bizinfo_schema_1.bizinfoSchema.nullable().default(null),
    parents: zod_1.default.array(parent_schema_1.parentWithoutUid),
    schools: zod_1.default.array(school_schema_1.schoolWithoutUid),
    templates: zod_1.default.array(invoice_schema_1.invoiceWithoutUidSchema),
    lessons: zod_1.default.array(lesson_schema_1.lessonWithoutUidSchema),
})
    .and(exports.bareUserSchema);
exports.initialBareUserWithoutId = {
    dob: null,
    mobile: null,
    name: "윤비서",
};
exports.initialBareUser = {
    ...exports.initialBareUserWithoutId,
    id: "",
};
exports.initialUser = {
    ...exports.initialBareUser,
    bizinfo: null,
    createdAt: new Date(),
    lessons: [],
    parents: [],
    schools: [],
    templates: [],
};
