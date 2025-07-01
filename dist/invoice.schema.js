"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialInvoice = exports.initialInvoiceItem = exports.bizInvoiceSchema = exports.invoiceWithoutUidSchema = exports.invoiceSchema = exports.invoiceItemSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const school_schema_1 = require("./school.schema");
const bizinfo_schema_1 = require("./bizinfo.schema");
exports.invoiceItemSchema = zod_1.default.object({
    name: zod_1.default.string(),
    quan: zod_1.default.number().min(1).default(1),
    price: zod_1.default.number().min(0).default(0),
    totalPrice: zod_1.default.number().default(0),
});
exports.invoiceSchema = school_schema_1.dateWithIdSchema.extend({
    title: zod_1.default.string(),
    body: zod_1.default.array(zod_1.default.string()).default([]),
    targetIds: zod_1.default.array(zod_1.default.string()).default([]), //! target parents id
    items: zod_1.default.array(exports.invoiceItemSchema).default([]),
    uid: zod_1.default.string(),
    bizinfo: bizinfo_schema_1.bizinfoSchema,
});
exports.invoiceWithoutUidSchema = exports.invoiceSchema.omit({ uid: true });
exports.bizInvoiceSchema = exports.invoiceWithoutUidSchema.omit({ bizinfo: true });
exports.initialInvoiceItem = { name: "", price: 0, quan: 1, totalPrice: 0 };
exports.initialInvoice = {
    body: [],
    createdAt: new Date(),
    id: "",
    items: [],
    targetIds: [],
    title: "",
};
