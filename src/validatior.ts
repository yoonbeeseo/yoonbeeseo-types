import { z } from "zod"
import { Student } from "./student.schema"
import { Parent } from "./parent.schema"

export type ValidatorResult<T = string> = T | null

export type EmailErrorMessage = "이메일을 입력해주세요." | '"@"를 포함해주세요.' | "이메일 뒷 자리를 입력해주세요." | "이메일 뒷 자리를 확인해주세요."

export function emailValidator(email: string): ValidatorResult<EmailErrorMessage> {
  if (!email || email.length === 0) {
    return "이메일을 입력해주세요."
  }
  if (!email.includes("@")) {
    return '"@"를 포함해주세요.'
  }
  const firstSplits = email.split("@")
  const surfixes = firstSplits[1]
  if (surfixes.length === 0) {
    return "이메일 뒷 자리를 입력해주세요."
  }
  if (!surfixes.includes(".")) {
    return "이메일 뒷 자리를 확인해주세요."
  }
  const lastSplits = surfixes.split(".")
  const lastSurfix = lastSplits[lastSplits.length - 1]
  if (lastSurfix.length < 2) {
    return "이메일 뒷 자리를 확인해주세요."
  }

  try {
    z.string().email().safeParse(email)
    return null
  } catch (error: any) {
    console.error(error)
    return error.message
  }
}

export type PasswordErrorMessage = "비밀번호를 입력해주세요." | "비밀번호를 확인해주세요." | "비밀번호가 일치하지 않습니다."
export function passwordValidator(
  password: string,
  options?: { min?: number; max?: number; confirmPasswords?: string }
): ValidatorResult<PasswordErrorMessage | string> {
  const min = options?.min ?? 6
  const max = options?.max ?? 18
  if (password.length === 0) {
    return "비밀번호를 확인해주세요."
  }
  if (password.length < min || password.length > max) {
    return `비밀번호는 ${min}~${max}자리로 생성해주세요.`
  }
  if (options?.confirmPasswords) {
    const { confirmPasswords } = options
    if (confirmPasswords.length === 0) {
      return "비밀번호를 확인해주세요."
    }
    if (confirmPasswords.length < min || confirmPasswords.length > max) {
      return `비밀번호는 ${min}~${max}자리로 생성해주세요.`
    }
    if (confirmPasswords !== password) {
      return "비밀번호가 일치하지 않습니다."
    }
  }
  return null
}

export type NumberErrorMessage = "숫자가 아닙니다." | "숫자만 입력해주세요."
export function numberValidator(input: any): ValidatorResult<NumberErrorMessage> {
  if (typeof input === "string") {
    if (isNaN(Number(input))) {
      return "숫자만 입력해주세요."
    }
  } else if (typeof input !== "number") {
    return "숫자가 아닙니다."
  }

  return null
}

export type KoreanErrorMessage = "한글만 입력해주세요." | "마지막 글자의 공백을 제외하고 입력해주세요." | "띄어쓰기 없이 입력해주세요."
export const koreanRegex = /^[가-힣\s]+$/
export const koreanRegexWithoutSpace = /^[가-힣]+$/
export function koreanValidator(input: string, options?: { endCheck?: boolean; withoutSpace?: boolean }): ValidatorResult<KoreanErrorMessage> {
  if (!koreanRegex.test(input)) {
    return "한글만 입력해주세요."
  }
  if (options?.endCheck) {
    if (input[input.length - 1] === " ") {
      return "마지막 글자의 공백을 제외하고 입력해주세요."
    }
  }
  if (options?.withoutSpace) {
    if (!koreanRegexWithoutSpace.test(input)) {
      return "띄어쓰기 없이 입력해주세요."
    }
  }
  return null
}

const stringSchema = z.string()
const arraySchema = z.array(z.any())

export function isSameLength(props: string | any[], comparedData: string | any[]): boolean | "문자나 배열이 아닙니다." | "비교할 값이 문자나 배열이 아닙니다." {
  try {
    stringSchema.safeParse(props)
    arraySchema.safeParse(props)
    try {
      stringSchema.safeParse(comparedData)
      arraySchema.safeParse(comparedData)
      const l: number = props.length
      const cl: number = comparedData.length

      return l !== cl
    } catch (err) {
      return "비교할 값이 문자나 배열이 아닙니다."
    }
  } catch (err) {
    return "문자나 배열이 아닙니다."
  }
}

// export function isParentArraySame(parents: Parent[], comparedParents: Parent[]): ValidatorResult {
//   if (isSameLength(parents, comparedParents)) {
//     if()
//   }
//   return null
// }

// export type NoChangeErrorMessage = "변경사항이 없습니다."
// export function hasChanged<T = any>({
//   data,
//   comparedData,
//   type,
// }: {
//   type: "student" | "lesson" | "school" | "extra" | "user" | "membership" | "invoice" | "invoce_item" | "bizinfo" | "parent"
//   data: T
//   comparedData: T
// }): ValidatorResult<NoChangeErrorMessage> {
//   const message: NoChangeErrorMessage = "변경사항이 없습니다."

//   switch (type) {
//     case "student":
//       const d: Student = { ...data }
//       const cd: Student = { ...comparedData }
//       if (d.name === cd.name && d.dob === cd.dob && d.enrolledAt === cd.enrolledAt && d.mobile === cd.mobile && d.paymentDate === cd.paymentDate) return null
//     default:
//       return message
//   }
// }
