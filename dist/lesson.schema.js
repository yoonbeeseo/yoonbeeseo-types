"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialLesson = exports.lessonSubjects = exports.lessonSorts = exports.lessonWithoutUidSchema = exports.lessonSchema = exports.lessonSubjectSchema = exports.lessonSortSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const school_schema_1 = require("./school.schema");
exports.lessonSortSchema = zod_1.default.enum(["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"]);
exports.lessonSubjectSchema = zod_1.default.enum([
    "영어",
    "수학",
    "국어",
    "사회",
    "과학",
    "미술",
    "음악",
    "태권도",
    "검도",
    "유도",
    "합기도",
    "주짓수",
    "복싱",
    "무에타이",
    "킥복싱",
    "경호무술",
    "직접입력",
]);
exports.lessonSchema = school_schema_1.dateWithIdSchema.extend({
    name: zod_1.default.string(),
    sort: exports.lessonSortSchema.or(zod_1.default.string()),
    subject: exports.lessonSubjectSchema.or(zod_1.default.string()),
    uid: zod_1.default.string(), //! connects user
});
exports.lessonWithoutUidSchema = exports.lessonSchema.omit({ uid: true });
exports.lessonSorts = ["유치부", "초등부", "중등부", "고등부", "성인부", "직접입력"];
exports.lessonSubjects = [
    "영어",
    "수학",
    "국어",
    "사회",
    "과학",
    "미술",
    "음악",
    "태권도",
    "검도",
    "유도",
    "합기도",
    "주짓수",
    "복싱",
    "무에타이",
    "킥복싱",
    "경호무술",
    "직접입력",
];
exports.initialLesson = { createdAt: new Date(), id: "", name: "", sort: "", subject: "" };
