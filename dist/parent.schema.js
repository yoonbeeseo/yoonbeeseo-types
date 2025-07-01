"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialParent = exports.parentRelationships = exports.parentWithoutUid = exports.parentSchema = exports.relationshipSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const school_schema_1 = require("./school.schema");
exports.relationshipSchema = zod_1.default.enum(["부", "모", "할머니", "할아버지", "직접입력"]);
exports.parentSchema = school_schema_1.dateWithIdSchema.extend({
    name: zod_1.default.string(),
    mobile: zod_1.default.string().length(11).nullable().default(null),
    relationship: exports.relationshipSchema.or(zod_1.default.string()),
    hasConsent: zod_1.default.boolean().default(false),
    uid: zod_1.default.string(), //! connect user
});
exports.parentWithoutUid = exports.parentSchema.omit({ uid: true });
exports.parentRelationships = ["부", "모", "할머니", "할아버지", "직접입력"];
exports.initialParent = { createdAt: new Date(), id: "", hasConsent: false, mobile: null, name: "", relationship: "" };
