"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialSchoolWithoutUid = exports.schoolLevels = exports.schoolSorts = exports.schoolWithoutUid = exports.schoolSchema = exports.dateWithIdSchema = exports.dateSchema = exports.schoolLevelSchema = exports.schoolSortSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.schoolSortSchema = zod_1.default.enum(["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"]);
exports.schoolLevelSchema = zod_1.default.enum(["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"]);
exports.dateSchema = zod_1.default.object({
    createdAt: zod_1.default.date().default(new Date()),
    updatedAt: zod_1.default.date().optional(),
});
exports.dateWithIdSchema = exports.dateSchema.extend({
    id: zod_1.default.string().uuid(),
});
exports.schoolSchema = exports.dateWithIdSchema.extend({
    name: zod_1.default.string(),
    sort: exports.schoolSortSchema.or(zod_1.default.string()).default(""),
    level: exports.schoolLevelSchema.or(zod_1.default.string()).nullable().default(null),
    uid: zod_1.default.string(), //! connects user
});
exports.schoolWithoutUid = exports.schoolSchema.omit({ uid: true });
exports.schoolSorts = ["어린이집", "유치원", "초등학교", "중학교", "고등학교", "대학교", "대학원", "직장", "직접입력"];
exports.schoolLevels = ["1학년", "2학년", "3학년", "4학년", "5학년", "6학년", "직접입력"];
exports.initialSchoolWithoutUid = {
    createdAt: new Date(),
    id: "",
    level: null,
    name: "",
    sort: "",
};
