"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizinfoPayloadSchema = exports.BizinfoSchema = exports.BizinfoEntitySchema = exports.AddressSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const lesson_1 = require("./lesson");
exports.AddressSchema = zod_1.z.object({
    zipcode: zod_1.z.string(),
    province: zod_1.z.string(),
    city: zod_1.z.string(),
    point: zod_1.z.string(),
    road: zod_1.z.string(),
    rest: zod_1.z.string(),
    road_address: zod_1.z.string(),
});
exports.BizinfoEntitySchema = shared_1.SharedLinkedUidSchema.extend({
    name: zod_1.z.string(), // biz name,
    ceo: zod_1.z.string(), // ceo name,
    regi: zod_1.z.string().length(10), //registration number,
    tels: zod_1.z.array(shared_1.MobileSchema.or(zod_1.z.string())),
    emails: zod_1.z.array(shared_1.EmailSchema),
    address: exports.AddressSchema,
    subjects: zod_1.z.array(lesson_1.LessonSubjectSchema),
});
exports.BizinfoSchema = exports.BizinfoEntitySchema.omit({ uid: true });
exports.BizinfoPayloadSchema = exports.BizinfoSchema.omit({
    created_at: true,
    updated_at: true,
});
