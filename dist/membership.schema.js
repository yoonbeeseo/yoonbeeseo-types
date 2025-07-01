"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleMemberships = exports.membershipWithoutUidSchema = exports.membershipSchema = exports.membershipPlan = exports.membershipName = exports.membershipSort = void 0;
const zod_1 = __importDefault(require("zod"));
exports.membershipSort = zod_1.default.enum(["Biz", "Parent", "Student", "Teacher"]);
exports.membershipName = zod_1.default.enum(["학원장", "학부모", "학생", "선생님"]);
exports.membershipPlan = zod_1.default.enum(["Free", "Pro", "Unlimited"]);
exports.membershipSchema = zod_1.default.object({
    id: zod_1.default.string(),
    sort: exports.membershipSort,
    name: exports.membershipName,
    plan: exports.membershipPlan,
    iat: zod_1.default.number().default(new Date().getTime()).nullable().default(null),
    exp: zod_1.default
        .number()
        .default(new Date().getTime() + 28 * 24 * 60 * 60 * 1000)
        .nullable()
        .default(null), //! 28 일 추가
    uid: zod_1.default.string(),
});
exports.membershipWithoutUidSchema = exports.membershipSchema.omit({ uid: true });
exports.sampleMemberships = [
    { exp: null, iat: null, id: "1", name: "학원장", plan: "Free", sort: "Biz" },
    { exp: null, iat: null, id: "2", name: "학원장", plan: "Pro", sort: "Biz" },
    { exp: null, iat: null, id: "3", name: "학원장", plan: "Unlimited", sort: "Biz" },
    { exp: null, iat: null, id: "4", name: "학부모", plan: "Free", sort: "Parent" },
    { exp: null, iat: null, id: "5", name: "학생", plan: "Free", sort: "Student" },
    { exp: null, iat: null, id: "6", name: "선생님", plan: "Free", sort: "Teacher" },
    { exp: null, iat: null, id: "6", name: "선생님", plan: "Pro", sort: "Teacher" },
    { exp: null, iat: null, id: "6", name: "선생님", plan: "Unlimited", sort: "Teacher" },
];
