"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formateTime = (time) => {
    const formatedTime = new Date(`2022-01-01T${time}:00`);
    return formatedTime;
};
exports.default = formateTime;