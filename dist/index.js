"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./bizinfo.schema"), exports);
__exportStar(require("./extra.schema"), exports);
__exportStar(require("./invoice.schema"), exports);
__exportStar(require("./lesson.schema"), exports);
__exportStar(require("./membership.schema"), exports);
__exportStar(require("./parent.schema"), exports);
__exportStar(require("./school.schema"), exports);
__exportStar(require("./user.schema"), exports);
__exportStar(require("./app.types"), exports);
__exportStar(require("./student.schema"), exports);
__exportStar(require("./validatior"), exports);
