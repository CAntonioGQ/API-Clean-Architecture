"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientException = void 0;
class ClientException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ClientException = ClientException;
