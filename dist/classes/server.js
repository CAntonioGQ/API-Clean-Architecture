"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExpress = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("../config/dotenv"));
dotenv_1.default.config();
class ServerExpress {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT);
    }
    startServer(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.ServerExpress = ServerExpress;
