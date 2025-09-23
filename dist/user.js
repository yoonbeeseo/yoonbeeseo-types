"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPayloadSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("./shared");
const biz_1 = require("./biz");
exports.UserSchema = shared_1.SharedUniqueSchema.extend({
    name: zod_1.z.string(),
    mobile: shared_1.MobileSchema,
    email: shared_1.EmailSchema,
    dob: shared_1.DobSchema,
    profile_url: shared_1.ImageUrlSchema,
    bizinfos: zod_1.z.array(biz_1.BizinfoSchema),
    lessons: zod_1.z.array(biz_1.LessonSchema),
    schools: zod_1.z.array(biz_1.SchoolSchema),
    parents: zod_1.z.array(biz_1.ParentSchema),
    extras: zod_1.z.array(biz_1.ExtraSchema),
});
exports.UserPayloadSchema = exports.UserSchema.omit({
    created_at: true,
    updated_at: true,
});
