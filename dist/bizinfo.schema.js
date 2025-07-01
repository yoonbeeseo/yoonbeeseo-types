"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialBizinfo = exports.bizinfoWithoutUidSchema = exports.bizinfoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.bizinfoSchema = zod_1.default.object({
    name: zod_1.default.string(),
    ceo: zod_1.default.string(),
    regi: zod_1.default.string().length(10),
    emails: zod_1.default.array(zod_1.default.string().email()).default([]),
    tels: zod_1.default.array(zod_1.default.string().length(11)).default([]),
    sns: zod_1.default.array(zod_1.default.string()).default([]),
    address: zod_1.default.string(),
    desc: zod_1.default.string().nullable().default(null),
    uid: zod_1.default.string(),
});
exports.bizinfoWithoutUidSchema = exports.bizinfoSchema.omit({ uid: true });
exports.initialBizinfo = {
    address: "",
    ceo: "",
    desc: null,
    emails: [],
    name: "",
    regi: "",
    sns: [],
    tels: [],
};
