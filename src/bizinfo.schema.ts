import z from "zod"
import { dateWithIdSchema } from "./school.schema"

export const bizinfoSchema = dateWithIdSchema.extend({
  name: z.string(),
  ceo: z.string(),
  regi: z.string().length(10),
  emails: z.array(z.string().email()).default([]),
  tels: z.array(z.string().length(11)).default([]),
  sns: z.array(z.string()).default([]),
  address: z.string(),
  desc: z.string().nullable().default(null),
  uid: z.string(),
})

export type BizinfoWithUid = z.infer<typeof bizinfoSchema>

export const bizinfoWithoutUidSchema = bizinfoSchema.omit({ uid: true })

export type Bizinfo = z.infer<typeof bizinfoWithoutUidSchema>

export const initialBizinfo: Bizinfo = {
  address: "",
  ceo: "",
  desc: null,
  emails: [],
  name: "",
  regi: "",
  sns: [],
  tels: [],
  id: "",
  createdAt: new Date(),
}
