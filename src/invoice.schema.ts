import z from "zod"
import { dateWithIdSchema } from "./school.schema"
import { bizinfoSchema } from "./bizinfo.schema"

export const invoiceItemSchema = z.object({
  name: z.string(),
  quan: z.number().min(1).default(1),
  price: z.number().min(0).default(0),
  totalPrice: z.number().default(0),
})

export const invoiceSchema = dateWithIdSchema.extend({
  title: z.string(),
  body: z.array(z.string()).default([]),
  targetIds: z.array(z.string()).default([]), //! target parents id
  items: z.array(invoiceItemSchema).default([]),
  uid: z.string(),
  bizinfo: bizinfoSchema,
})

export const invoiceWithoutUidSchema = invoiceSchema.omit({ uid: true })
export const bizInvoiceSchema = invoiceWithoutUidSchema.omit({ bizinfo: true })

export type InvoiceItem = z.infer<typeof invoiceItemSchema>
export type InvoiceWithUid = z.infer<typeof invoiceSchema>
export type Invoice = z.infer<typeof invoiceWithoutUidSchema>
export type BizInvoice = z.infer<typeof bizInvoiceSchema>

export const initialInvoiceItem: InvoiceItem = { name: "", price: 0, quan: 1, totalPrice: 0 }
export const initialInvoice: BizInvoice = {
  body: [],
  createdAt: new Date(),
  id: "",
  items: [],
  targetIds: [],
  title: "",
}
