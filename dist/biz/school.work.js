"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialSchool = exports.SchoolPayloadSchema = exports.SchoolSchema = exports.SchoolEntitySchema = exports.schoolLevels = exports.SchoolLevelSchema = exports.schoolSorts = exports.SchoolSortSchema = void 0;
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
exports.schoolSorts = [
    "어린이집/유치원",
    "초등학교",
    "중학교",
    "대학교",
    "직장",
];
exports.SchoolLevelSchema = zod_1.z.enum([
    ...Array.from({ length: 6 }, (_, i) => `${i + 1}학년`),
    "직접입력",
]);
exports.schoolLevels = [
    "1학년",
    "2학년",
    "3학년",
    "4학년",
    "5학년",
    "6학년",
];
exports.SchoolEntitySchema = shared_1.SharedLinkedIntSchema.extend({
    sort: exports.SchoolSortSchema.or(zod_1.z.string()),
    description: exports.SchoolLevelSchema.nullable(),
    name: zod_1.z.string(),
    level: exports.SchoolLevelSchema.nullable(),
});
exports.SchoolSchema = exports.SchoolEntitySchema.omit({ uid: true });
exports.SchoolPayloadSchema = exports.SchoolSchema.omit({
    created_at: true,
    updated_at: true,
});
exports.initialSchool = {
    description: null,
    id: 0,
    name: "",
    sort: "",
    level: null,
};
