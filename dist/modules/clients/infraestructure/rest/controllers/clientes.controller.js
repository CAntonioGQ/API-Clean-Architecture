"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClientByPk = exports.getClients = void 0;
const clients_1 = __importDefault(require("../../../application/usescases/clients"));
const clients_factory_1 = require("../../../domain/factories/clients.factory");
const clients_2 = require("../../../domain/models/clients");
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield clients_1.default.getClients(req.query);
        return res.json({ ok: true, data });
    }
    catch (err) {
        return res.json({ ok: false, message: err });
    }
});
exports.getClients = getClients;
const getClientByPk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCliente = req.params.idCliente;
        const data = yield clients_1.default.getClientByPk(idCliente);
        return res.json({ ok: true, data });
    }
    catch (err) {
        return res.json({ ok: false, message: err });
    }
});
exports.getClientByPk = getClientByPk;
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new clients_2.Client();
        clients_factory_1.ClientFactory.populate(client, req.body);
        const data = yield clients_1.default.createClient(client);
        return res.json({ ok: true, data });
    }
    catch (err) {
        return res.json({ ok: false, message: err });
    }
});
exports.createClient = createClient;
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = new clients_2.Client();
        clients_factory_1.ClientFactory.populate(client, req.body);
        const clientUpdated = yield clients_1.default.updateClient(client.getIdClient, client);
        return res.json({ ok: true, data: clientUpdated });
    }
    catch (err) {
        return res.json({ ok: false, message: err });
    }
});
exports.updateClient = updateClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCliente = parseInt(req.params.idCliente);
        const clientDeleted = yield clients_1.default.deleteClient(idCliente);
        return res.json({ ok: true, data: clientDeleted });
    }
    catch (err) {
        return res.json({ ok: false, message: err });
    }
});
exports.deleteClient = deleteClient;
