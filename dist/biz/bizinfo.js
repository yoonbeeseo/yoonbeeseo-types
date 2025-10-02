"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialBizinfo = exports.initialAddress = exports.BizinfoPayloadSchema = exports.BizinfoSchema = exports.BizinfoEntitySchema = exports.AddressSchema = exports.jusoReturnSchema = exports.fetchedJusoSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
const lesson_1 = require("./lesson");
exports.fetchedJusoSchema = zod_1.z.object({
    admCd: zod_1.z.string(),
    bdkdcd: zod_1.z.string(),
    bdMgtSn: zod_1.z.string(),
    bdNm: zod_1.z.string(),
    buldMnnm: zod_1.z.string(),
    buldSlno: zod_1.z.string(),
    detBdNmList: zod_1.z.string(),
    emdNm: zod_1.z.string(),
    emdNo: zod_1.z.string(),
    engAddr: zod_1.z.string(),
    jibunAddr: zod_1.z.string(),
    liNm: zod_1.z.string(),
    lnbrMnnm: zod_1.z.string(),
    lnbrSlno: zod_1.z.string(),
    mtYn: zod_1.z.string(),
    rn: zod_1.z.string(),
    rnMgtSn: zod_1.z.string(),
    roadAddr: zod_1.z.string(),
    roadAddrPart1: zod_1.z.string(),
    roadAddrPart2: zod_1.z.string(),
    sggNm: zod_1.z.string(),
    siNm: zod_1.z.string(),
    udrtYn: zod_1.z.string(),
    zipNo: zod_1.z.string(),
});
exports.jusoReturnSchema = zod_1.z.object({
    results: zod_1.z.object({
        common: zod_1.z.object({
            errorMessage: zod_1.z.string(),
            countPerPage: zod_1.z.string(),
            totalCount: zod_1.z.string(),
            currentPage: zod_1.z.string(),
            errorCode: zod_1.z.enum(["1", "0"]),
        }),
        juso: zod_1.z.array(exports.fetchedJusoSchema),
    }),
});
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
exports.initialAddress = {
    city: "",
    point: "",
    province: "",
    rest: "",
    road: "",
    road_address: "",
    zipcode: "",
};
exports.initialBizinfo = {
    address: exports.initialAddress,
    ceo: "",
    emails: [],
    id: "",
    name: "",
    regi: "",
    subjects: [],
    tels: [],
};
