import z from "zod"
import { dateWithIdSchema } from "./school.schema"

export const relationshipSchema = z.enum(["부", "모", "할머니", "할아버지", "직접입력"])

export const parentSchema = dateWithIdSchema.extend({
  name: z.string(),
  mobile: z.string().length(11).nullable().default(null),
  relationship: relationshipSchema.or(z.string()),
  hasConsent: z.boolean().default(false),
  uid: z.string(), //! connect user
})

export type ParentRelationship = z.infer<typeof relationshipSchema>

export type ParentWithUid = z.infer<typeof parentSchema>

export const parentWithoutUid = parentSchema.omit({ uid: true })

export type Parent = z.infer<typeof parentWithoutUid>

export const parentRelationships: ParentRelationship[] = ["부", "모", "할머니", "할아버지", "직접입력"]
export const initialParent: Parent = { createdAt: new Date(), id: "", hasConsent: false, mobile: null, name: "", relationship: "" }
