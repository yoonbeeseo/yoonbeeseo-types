import { z } from "zod";
import { EmailSchema, MobileSchema, SharedLinkedUidSchema } from "../shared";
import { LessonSubjectSchema } from "./lesson";

export const fetchedJusoSchema = z.object({
  admCd: z.string(),
  bdkdcd: z.string(),
  bdMgtSn: z.string(),
  bdNm: z.string(),
  buldMnnm: z.string(),
  buldSlno: z.string(),
  detBdNmList: z.string(),
  emdNm: z.string(),
  emdNo: z.string(),
  engAddr: z.string(),
  jibunAddr: z.string(),
  liNm: z.string(),
  lnbrMnnm: z.string(),
  lnbrSlno: z.string(),
  mtYn: z.string(),
  rn: z.string(),
  rnMgtSn: z.string(),
  roadAddr: z.string(),
  roadAddrPart1: z.string(),
  roadAddrPart2: z.string(),
  sggNm: z.string(),
  siNm: z.string(),
  udrtYn: z.string(),
  zipNo: z.string(),
});

export type FetchedJuso = z.infer<typeof fetchedJusoSchema>;

export const jusoReturnSchema = z.object({
  results: z.object({
    common: z.object({
      errorMessage: z.string(),
      countPerPage: z.string(),
      totalCount: z.string(),
      currentPage: z.string(),
      errorCode: z.enum(["1", "0"]),
    }),
    juso: z.array(fetchedJusoSchema),
  }),
});

export type JusoResult = z.infer<typeof jusoReturnSchema>;

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

export const initialAddress: Address = {
  city: "",
  point: "",
  province: "",
  rest: "",
  road: "",
  road_address: "",
  zipcode: "",
};

export const initialBizinfo: BizinifoPayload = {
  address: initialAddress,
  ceo: "",
  emails: [],
  id: "",
  name: "",
  regi: "",
  subjects: [],
  tels: [],
};
