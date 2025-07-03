export type ValidatorResult<T = string> = T | null;
export type EmailErrorMessage = "이메일을 입력해주세요." | '"@"를 포함해주세요.' | "이메일 뒷 자리를 입력해주세요." | "이메일 뒷 자리를 확인해주세요.";
export declare function emailValidator(email: string): ValidatorResult<EmailErrorMessage>;
export type PasswordErrorMessage = "비밀번호를 입력해주세요." | "비밀번호를 확인해주세요." | "비밀번호가 일치하지 않습니다.";
export declare function passwordValidator(password: string, options?: {
    min?: number;
    max?: number;
    confirmPasswords?: string;
}): ValidatorResult<PasswordErrorMessage | string>;
export type NumberErrorMessage = "숫자가 아닙니다." | "숫자만 입력해주세요.";
export declare function numberValidator(input: any): ValidatorResult<NumberErrorMessage>;
export type KoreanErrorMessage = "한글만 입력해주세요." | "마지막 글자의 공백을 제외하고 입력해주세요." | "띄어쓰기 없이 입력해주세요.";
export declare const koreanRegex: RegExp;
export declare const koreanRegexWithoutSpace: RegExp;
export declare function koreanValidator(input: string, options?: {
    endCheck?: boolean;
    withoutSpace?: boolean;
}): ValidatorResult<KoreanErrorMessage>;
export declare function isSameLength(props: string | any[], comparedData: string | any[]): boolean | "문자나 배열이 아닙니다." | "비교할 값이 문자나 배열이 아닙니다.";
//# sourceMappingURL=validatior.d.ts.map