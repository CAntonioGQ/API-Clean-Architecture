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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUseCase = void 0;
class ClientUseCase {
    constructor(clientsRepository) {
        this.clientsRepository = clientsRepository;
    }
    getClients(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield this.clientsRepository.getClients(params);
            return clients;
        });
    }
    getClientByPk(idCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.clientsRepository.getClientByPk(idCliente);
            return client;
        });
    }
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!client.getNameClient) {
                throw new Error("El nombre no puede estar vacío");
            }
            return this.clientsRepository.createClient(client);
        });
    }
    updateClient(idCliente, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!client.getNameClient) {
                throw new Error("El nombre no puede estar vacío");
            }
            return this.clientsRepository.updateClient(idCliente, client);
        });
    }
    deleteClient(idCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.clientsRepository.getClientByPk(idCliente);
            if (!client) {
                throw new Error("Cliente no encontrado");
            }
            yield this.clientsRepository.deleteClient(idCliente);
        });
    }
}
exports.ClientUseCase = ClientUseCase;
