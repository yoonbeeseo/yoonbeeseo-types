import c from "open-color";

export type Colors =
  | "textColor"
  | "backgroundColor"
  | "baseColor"
  | "borderColor"
  | "whitesmoke"
  | "lightgray"
  | "gray"
  | "darkgray"
  | "charcoal"
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "warning"
  | "kakao";

export type AppColors = Record<Colors, string>;

export const appColors: AppColors = {
  textColor: c.gray[9],
  backgroundColor: c.gray[0],
  baseColor: c.white,
  borderColor: c.gray[2],
  white: c.white,
  whitesmoke: c.gray[0],
  lightgray: c.gray[2],
  gray: c.gray[5],
  darkgray: c.gray[7],
  charcoal: c.gray[8],
  black: c.black,
  primary: c.blue[5],
  secondary: c.teal[5],
  warning: c.red[5],
  kakao: c.yellow[4],
};

export const blues = Array.from({ length: 10 }, (_, i) => c.blue[i]);
export const cyans = Array.from({ length: 10 }, (_, i) => c.cyan[i]);
export const grapes = Array.from({ length: 10 }, (_, i) => c.grape[i]);
export const grays = Array.from({ length: 10 }, (_, i) => c.gray[i]);
export const greens = Array.from({ length: 10 }, (_, i) => c.green[i]);
export const indigos = Array.from({ length: 10 }, (_, i) => c.indigo[i]);
export const limes = Array.from({ length: 10 }, (_, i) => c.lime[i]);
export const oranges = Array.from({ length: 10 }, (_, i) => c.orange[i]);
export const pinks = Array.from({ length: 10 }, (_, i) => c.pink[i]);
export const reds = Array.from({ length: 10 }, (_, i) => c.red[i]);
export const teals = Array.from({ length: 10 }, (_, i) => c.teal[i]);
export const violets = Array.from({ length: 10 }, (_, i) => c.violet[i]);
export const yellows = Array.from({ length: 10 }, (_, i) => c.yellow[i]);
