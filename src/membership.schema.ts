import z from "zod"

export const membershipSort = z.enum(["Biz", "Parent", "Student", "Teacher"])

export const membershipName = z.enum(["학원장", "학부모", "학생", "선생님"])

export const membershipPlan = z.enum(["Free", "Pro", "Unlimited"])

export const membershipSchema = z.object({
  id: z.string(),
  sort: membershipSort,
  name: membershipName,
  plan: membershipPlan,
  iat: z.number().default(new Date().getTime()).nullable().default(null),
  exp: z
    .number()
    .default(new Date().getTime() + 28 * 24 * 60 * 60 * 1000)
    .nullable()
    .default(null), //! 28 일 추가
  uid: z.string(),
})

export const membershipWithoutUidSchema = membershipSchema.omit({ uid: true })

export type MembershipSort = z.infer<typeof membershipSort>
export type MembershipName = z.infer<typeof membershipName>
export type MembershipPlan = z.infer<typeof membershipPlan>

export type MembershipWithUid = z.infer<typeof membershipSchema>
export type Membership = z.infer<typeof membershipWithoutUidSchema>

export const sampleMemberships: Membership[] = [
  { exp: null, iat: null, id: "1", name: "학원장", plan: "Free", sort: "Biz" },
  { exp: null, iat: null, id: "2", name: "학원장", plan: "Pro", sort: "Biz" },
  { exp: null, iat: null, id: "3", name: "학원장", plan: "Unlimited", sort: "Biz" },
  { exp: null, iat: null, id: "4", name: "학부모", plan: "Free", sort: "Parent" },
  { exp: null, iat: null, id: "5", name: "학생", plan: "Free", sort: "Student" },
  { exp: null, iat: null, id: "6", name: "선생님", plan: "Free", sort: "Teacher" },
  { exp: null, iat: null, id: "6", name: "선생님", plan: "Pro", sort: "Teacher" },
  { exp: null, iat: null, id: "6", name: "선생님", plan: "Unlimited", sort: "Teacher" },
]
