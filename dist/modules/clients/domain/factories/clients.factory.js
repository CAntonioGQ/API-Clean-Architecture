"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFactory = void 0;
const clients_1 = require("../models/clients");
class ClientFactory {
    static populate(client, fields) {
        if (fields.idCliente) {
            client.setIdClient = fields.idCliente;
        }
        else {
            client.setIdClient = undefined;
        }
        if (fields.nombreCliente) {
            client.setNameClient = fields.nombreCliente;
        }
        else {
            client.setNameClient = undefined;
        }
    }
    static jsonToModel(fields) {
        let client = new clients_1.Client();
        if (fields.idCliente) {
            client.setIdClient = fields.idCliente;
        }
        else {
            client.setIdClient = undefined;
        }
        if (fields.nombreCliente) {
            client.setNameClient = fields.nombreCliente;
        }
        else {
            client.setNameClient = undefined;
        }
        return client;
    }
    static toJson(client) {
        return {
            idCliente: client.getIdClient,
            nombreCliente: client.getNameClient
        };
    }
}
exports.ClientFactory = ClientFactory;
