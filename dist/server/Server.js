"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sever = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const sever = (0, express_1.default)();
exports.sever = sever;
sever.use(express_1.default.json());
sever.use(routes_1.router);
