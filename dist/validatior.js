"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.koreanRegexWithoutSpace = exports.koreanRegex = void 0;
exports.emailValidator = emailValidator;
exports.passwordValidator = passwordValidator;
exports.numberValidator = numberValidator;
exports.koreanValidator = koreanValidator;
exports.isSameLength = isSameLength;
const zod_1 = require("zod");
function emailValidator(email) {
    if (!email || email.length === 0) {
        return "이메일을 입력해주세요.";
    }
    if (!email.includes("@")) {
        return '"@"를 포함해주세요.';
    }
    const firstSplits = email.split("@");
    const surfixes = firstSplits[1];
    if (surfixes.length === 0) {
        return "이메일 뒷 자리를 입력해주세요.";
    }
    if (!surfixes.includes(".")) {
        return "이메일 뒷 자리를 확인해주세요.";
    }
    const lastSplits = surfixes.split(".");
    const lastSurfix = lastSplits[lastSplits.length - 1];
    if (lastSurfix.length < 2) {
        return "이메일 뒷 자리를 확인해주세요.";
    }
    try {
        zod_1.z.string().email().safeParse(email);
        return null;
    }
    catch (error) {
        console.error(error);
        return error.message;
    }
}
function passwordValidator(password, options) {
    const min = options?.min ?? 6;
    const max = options?.max ?? 18;
    if (password.length === 0) {
        return "비밀번호를 확인해주세요.";
    }
    if (password.length < min || password.length > max) {
        return `비밀번호는 ${min}~${max}자리로 생성해주세요.`;
    }
    if (options?.confirmPasswords) {
        const { confirmPasswords } = options;
        if (confirmPasswords.length === 0) {
            return "비밀번호를 확인해주세요.";
        }
        if (confirmPasswords.length < min || confirmPasswords.length > max) {
            return `비밀번호는 ${min}~${max}자리로 생성해주세요.`;
        }
        if (confirmPasswords !== password) {
            return "비밀번호가 일치하지 않습니다.";
        }
    }
    return null;
}
function numberValidator(input) {
    if (typeof input === "string") {
        if (isNaN(Number(input))) {
            return "숫자만 입력해주세요.";
        }
    }
    else if (typeof input !== "number") {
        return "숫자가 아닙니다.";
    }
    return null;
}
exports.koreanRegex = /^[가-힣\s]+$/;
exports.koreanRegexWithoutSpace = /^[가-힣]+$/;
function koreanValidator(input, options) {
    if (!exports.koreanRegex.test(input)) {
        return "한글만 입력해주세요.";
    }
    if (options?.endCheck) {
        if (input[input.length - 1] === " ") {
            return "마지막 글자의 공백을 제외하고 입력해주세요.";
        }
    }
    if (options?.withoutSpace) {
        if (!exports.koreanRegexWithoutSpace.test(input)) {
            return "띄어쓰기 없이 입력해주세요.";
        }
    }
    return null;
}
const stringSchema = zod_1.z.string();
const arraySchema = zod_1.z.array(zod_1.z.any());
function isSameLength(props, comparedData) {
    try {
        stringSchema.safeParse(props);
        arraySchema.safeParse(props);
        try {
            stringSchema.safeParse(comparedData);
            arraySchema.safeParse(comparedData);
            const l = props.length;
            const cl = comparedData.length;
            return l !== cl;
        }
        catch (err) {
            return "비교할 값이 문자나 배열이 아닙니다.";
        }
    }
    catch (err) {
        return "문자나 배열이 아닙니다.";
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
