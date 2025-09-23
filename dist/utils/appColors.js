"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yellows = exports.violets = exports.teals = exports.reds = exports.pinks = exports.oranges = exports.limes = exports.indigos = exports.greens = exports.grays = exports.grapes = exports.cyans = exports.blues = exports.appColors = void 0;
const open_color_1 = __importDefault(require("open-color"));
exports.appColors = {
    textColor: open_color_1.default.gray[9],
    backgroundColor: open_color_1.default.gray[0],
    baseColor: open_color_1.default.white,
    borderColor: open_color_1.default.gray[2],
    white: open_color_1.default.white,
    whitesmoke: open_color_1.default.gray[0],
    lightgray: open_color_1.default.gray[2],
    gray: open_color_1.default.gray[5],
    darkgray: open_color_1.default.gray[7],
    charcoal: open_color_1.default.gray[8],
    black: open_color_1.default.black,
    primary: open_color_1.default.blue[5],
    secondary: open_color_1.default.teal[5],
    warning: open_color_1.default.red[5],
    kakao: open_color_1.default.yellow[4],
};
exports.blues = Array.from({ length: 10 }, (_, i) => open_color_1.default.blue[i]);
exports.cyans = Array.from({ length: 10 }, (_, i) => open_color_1.default.cyan[i]);
exports.grapes = Array.from({ length: 10 }, (_, i) => open_color_1.default.grape[i]);
exports.grays = Array.from({ length: 10 }, (_, i) => open_color_1.default.gray[i]);
exports.greens = Array.from({ length: 10 }, (_, i) => open_color_1.default.green[i]);
exports.indigos = Array.from({ length: 10 }, (_, i) => open_color_1.default.indigo[i]);
exports.limes = Array.from({ length: 10 }, (_, i) => open_color_1.default.lime[i]);
exports.oranges = Array.from({ length: 10 }, (_, i) => open_color_1.default.orange[i]);
exports.pinks = Array.from({ length: 10 }, (_, i) => open_color_1.default.pink[i]);
exports.reds = Array.from({ length: 10 }, (_, i) => open_color_1.default.red[i]);
exports.teals = Array.from({ length: 10 }, (_, i) => open_color_1.default.teal[i]);
exports.violets = Array.from({ length: 10 }, (_, i) => open_color_1.default.violet[i]);
exports.yellows = Array.from({ length: 10 }, (_, i) => open_color_1.default.yellow[i]);
