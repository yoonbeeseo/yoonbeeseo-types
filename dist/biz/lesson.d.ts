import { z } from "zod";
export declare const LessonSortSchema: z.ZodEnum<{
    유치부: "유치부";
    초등부: "초등부";
    중등부: "중등부";
    고등부: "고등부";
    성인부: "성인부";
}>;
export type LessonSort = z.infer<typeof LessonSortSchema>;
export declare const LessonSubjectSchema: z.ZodEnum<{
    영어: "영어";
    국어: "국어";
    수학: "수학";
    직접입력: "직접입력";
}>;
export type LessonSubject = z.infer<typeof LessonSubjectSchema>;
export declare const LessonPriceSchema: z.ZodObject<{
    perMonth: z.ZodNumber;
    length: z.ZodNumber;
    countPerWeek: z.ZodNumber;
}, z.core.$strip>;
export type LessonPrice = z.infer<typeof LessonPriceSchema>;
export declare const LessonEntitySchema: z.ZodObject<{
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    id: z.ZodNumber;
    uid: z.ZodUUID;
    sort: z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>;
    subject: z.ZodUnion<[z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>, z.ZodString]>;
    price: z.ZodObject<{
        perMonth: z.ZodNumber;
        length: z.ZodNumber;
        countPerWeek: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LessonEntity = z.infer<typeof LessonEntitySchema>;
export declare const LessonSchema: z.ZodObject<{
    id: z.ZodNumber;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    sort: z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>;
    subject: z.ZodUnion<[z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>, z.ZodString]>;
    price: z.ZodObject<{
        perMonth: z.ZodNumber;
        length: z.ZodNumber;
        countPerWeek: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Lesson = z.infer<typeof LessonSchema>;
export declare const LessonPayloadSchema: z.ZodObject<{
    id: z.ZodNumber;
    sort: z.ZodEnum<{
        유치부: "유치부";
        초등부: "초등부";
        중등부: "중등부";
        고등부: "고등부";
        성인부: "성인부";
    }>;
    subject: z.ZodUnion<[z.ZodEnum<{
        영어: "영어";
        국어: "국어";
        수학: "수학";
        직접입력: "직접입력";
    }>, z.ZodString]>;
    price: z.ZodObject<{
        perMonth: z.ZodNumber;
        length: z.ZodNumber;
        countPerWeek: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LessonPayload = z.infer<typeof LessonPayloadSchema>;
