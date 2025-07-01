"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialExtra = exports.extraWithoutUid = exports.extraSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const school_schema_1 = require("./school.schema");
exports.extraSchema = school_schema_1.dateWithIdSchema.extend({
    name: zod_1.default.string(),
    price: zod_1.default.number().min(0).default(0),
    desc: zod_1.default.string().nullable().default(null),
    uid: zod_1.default.string(), //! connects user
});
exports.extraWithoutUid = exports.extraSchema.omit({ uid: true });
exports.initialExtra = {
    createdAt: new Date(),
    desc: null,
    id: "",
    name: "",
    price: 0,
};
