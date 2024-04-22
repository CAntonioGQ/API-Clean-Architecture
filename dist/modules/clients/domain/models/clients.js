"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    get getIdClient() {
        return this.idCliente;
    }
    set setIdClient(idCliente) {
        this.idCliente = idCliente;
    }
    get getNameClient() {
        return this.nombreCliente;
    }
    set setNameClient(nombreCliente) {
        this.nombreCliente = nombreCliente;
    }
}
exports.Client = Client;
