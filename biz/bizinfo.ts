import { z } from "zod";
import { EmailSchema, MobileSchema, SharedLinkedUidSchema } from "../shared";
import { LessonSubjectSchema } from "./lesson";

export const AddressSchema = z.object({
  zipcode: z.string(),
  province: z.string(),
  city: z.string(),
  point: z.string(),
  road: z.string(),
  rest: z.string(),
  road_address: z.string(),
});

export type Address = z.infer<typeof AddressSchema>;

export const BizinfoEntitySchema = SharedLinkedUidSchema.extend({
  name: z.string(), // biz name,
  ceo: z.string(), // ceo name,
  regi: z.string().length(10), //registration number,
  tels: z.array(MobileSchema.or(z.string())),
  emails: z.array(EmailSchema),
  address: AddressSchema,
  subjects: z.array(LessonSubjectSchema),
});

export type BizinfoEntity = z.infer<typeof BizinfoEntitySchema>;

export const BizinfoSchema = BizinfoEntitySchema.omit({ uid: true });
export type Bizinfo = z.infer<typeof BizinfoSchema>;

export const BizinfoPayloadSchema = BizinfoSchema.omit({
  created_at: true,
  updated_at: true,
});
export type BizinifoPayload = z.infer<typeof BizinfoPayloadSchema>;
