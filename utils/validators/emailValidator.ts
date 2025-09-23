import { ValidatorResult } from ".";
import { z } from "zod";

export type EmailMessage =
  | '반드시 "@"를 포함시켜 주세요.'
  | "뒷자리를 확인해주세요."
  | "중복된 이메일입니다.";
export const emailValidator = (
  payload: string,
  emails: string[]
): ValidatorResult<EmailMessage> => {
  if (!payload.includes("@")) {
    return '반드시 "@"를 포함시켜 주세요.';
  }
  const firstSplit = payload.split("@");
  const secondSplit = firstSplit[1].split(".");
  const surfixHasProblems =
    !firstSplit[1].includes(".") ||
    firstSplit[1].length < 2 ||
    secondSplit[secondSplit.length - 1].length < 2;

  if (surfixHasProblems) {
    return "뒷자리를 확인해주세요.";
  }

  try {
    const res = z.email().parse(payload);

    if (emails) {
      const found = emails.find((email) => email === payload);
      if (found) {
        return "중복된 이메일입니다.";
      }
    }
    console.log(res);
    return null;
  } catch (error: any) {
    return error.message;
  }
};
