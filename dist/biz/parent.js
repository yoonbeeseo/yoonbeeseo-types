"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialParent = exports.ParentPayloadSchema = exports.ParentSchema = exports.ParentEntitySchema = exports.RelationshipSchema = void 0;
const zod_1 = require("zod");
const shared_1 = require("../shared");
exports.RelationshipSchema = zod_1.z.enum([
    "부",
    "모",
    "할아버지",
    "할머니",
    "직접입력",
]);
exports.ParentEntitySchema = shared_1.SharedLinkedUidSchema.extend({
    relationship: exports.RelationshipSchema.or(zod_1.z.string()),
    mobile: zod_1.z.array(shared_1.MobileSchema),
    has_agreed_privacy_policy: zod_1.z.date().nullable(),
    has_agreed_on_behalf: zod_1.z.date().nullable(),
    name: zod_1.z.string(),
});
exports.ParentSchema = exports.ParentEntitySchema.omit({ uid: true });
exports.ParentPayloadSchema = exports.ParentSchema.omit({
    created_at: true,
    updated_at: true,
});
exports.initialParent = {
    has_agreed_on_behalf: null,
    has_agreed_privacy_policy: null,
    id: "",
    mobile: [],
    name: "",
    relationship: "",
};
