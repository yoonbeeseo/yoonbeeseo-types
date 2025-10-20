import { z } from "zod";
export declare const fetchedJusoSchema: z.ZodObject<{
    admCd: z.ZodString;
    bdkdcd: z.ZodString;
    bdMgtSn: z.ZodString;
    bdNm: z.ZodString;
    buldMnnm: z.ZodString;
    buldSlno: z.ZodString;
    detBdNmList: z.ZodString;
    emdNm: z.ZodString;
    emdNo: z.ZodString;
    engAddr: z.ZodString;
    jibunAddr: z.ZodString;
    liNm: z.ZodString;
    lnbrMnnm: z.ZodString;
    lnbrSlno: z.ZodString;
    mtYn: z.ZodString;
    rn: z.ZodString;
    rnMgtSn: z.ZodString;
    roadAddr: z.ZodString;
    roadAddrPart1: z.ZodString;
    roadAddrPart2: z.ZodString;
    sggNm: z.ZodString;
    siNm: z.ZodString;
    udrtYn: z.ZodString;
    zipNo: z.ZodString;
}, z.core.$strip>;
export type FetchedJuso = z.infer<typeof fetchedJusoSchema>;
export declare const jusoReturnSchema: z.ZodObject<{
    results: z.ZodObject<{
        common: z.ZodObject<{
            errorMessage: z.ZodString;
            countPerPage: z.ZodString;
            totalCount: z.ZodString;
            currentPage: z.ZodString;
            errorCode: z.ZodEnum<{
                0: "0";
                1: "1";
            }>;
        }, z.core.$strip>;
        juso: z.ZodArray<z.ZodObject<{
            admCd: z.ZodString;
            bdkdcd: z.ZodString;
            bdMgtSn: z.ZodString;
            bdNm: z.ZodString;
            buldMnnm: z.ZodString;
            buldSlno: z.ZodString;
            detBdNmList: z.ZodString;
            emdNm: z.ZodString;
            emdNo: z.ZodString;
            engAddr: z.ZodString;
            jibunAddr: z.ZodString;
            liNm: z.ZodString;
            lnbrMnnm: z.ZodString;
            lnbrSlno: z.ZodString;
            mtYn: z.ZodString;
            rn: z.ZodString;
            rnMgtSn: z.ZodString;
            roadAddr: z.ZodString;
            roadAddrPart1: z.ZodString;
            roadAddrPart2: z.ZodString;
            sggNm: z.ZodString;
            siNm: z.ZodString;
            udrtYn: z.ZodString;
            zipNo: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type JusoResult = z.infer<typeof jusoReturnSchema>;
export declare const AddressSchema: z.ZodObject<{
    zipcode: z.ZodString;
    province: z.ZodString;
    city: z.ZodString;
    point: z.ZodString;
    road: z.ZodString;
    rest: z.ZodString;
    road_address: z.ZodString;
}, z.core.$strip>;
export type Address = z.infer<typeof AddressSchema>;
export declare const BizinfoEntitySchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    uid: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type BizinfoEntity = z.infer<typeof BizinfoEntitySchema>;
export declare const BizinfoSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type Bizinfo = z.infer<typeof BizinfoSchema>;
export declare const BizinfoPayloadSchema: z.ZodObject<{
    id: z.ZodUUID;
    name: z.ZodString;
    ceo: z.ZodString;
    regi: z.ZodString;
    tels: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    emails: z.ZodArray<z.ZodEmail>;
    address: z.ZodObject<{
        zipcode: z.ZodString;
        province: z.ZodString;
        city: z.ZodString;
        point: z.ZodString;
        road: z.ZodString;
        rest: z.ZodString;
        road_address: z.ZodString;
    }, z.core.$strip>;
    subjects: z.ZodArray<z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>>;
}, z.core.$strip>;
export type BizinifoPayload = z.infer<typeof BizinfoPayloadSchema>;
export declare const initialAddress: Address;
export declare const initialBizinfo: BizinifoPayload;
