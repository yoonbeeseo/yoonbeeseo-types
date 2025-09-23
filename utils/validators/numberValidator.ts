import { z } from "zod";
import { ValidatorResult } from ".";

export const NumberSchema = z.number();

export type NumberMessage = "숫자가 아닙니다.";
export const numberValidator = (
  payload: string | number
): ValidatorResult<NumberMessage> => {
  const number = String(payload);
  try {
    const res = NumberSchema.parse(number);
    console.log(res);
    return null;
  } catch (error) {
    return error.message;
  }
};
