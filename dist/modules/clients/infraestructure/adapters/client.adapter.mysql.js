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
exports.ClientAdapterMySql = void 0;
const clients_factory_1 = require("../../domain/factories/clients.factory");
const clientes_entity_1 = require("../entities/clientes.entity");
const db_1 = require("../../../../config/database/db");
const client_exception_1 = require("../../domain/exceptions/client.exception");
class ClientAdapterMySql {
    getClients(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientRepository = db_1.AppDataSource.getRepository(clientes_entity_1.ClientEntity);
            const clientsEntities = yield clientRepository.findAndCount();
            let clients = [];
            clientsEntities.forEach(clientEntity => {
                clients.push(clients_factory_1.ClientFactory.jsonToModel(clientEntity));
            });
            return clients;
        });
    }
    getClientByPk(idCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientRepository = db_1.AppDataSource.getRepository(clientes_entity_1.ClientEntity);
            const clientEntity = yield clientRepository.findOne({ where: { idClientes: idCliente } });
            if (!clientEntity) {
                throw new client_exception_1.ClientException("No se encontró el cliente");
            }
            return clients_factory_1.ClientFactory.jsonToModel(clientEntity);
        });
    }
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientsRepository = db_1.AppDataSource.getRepository(clientes_entity_1.ClientEntity);
                const clientEntityCreated = yield clientsRepository.save(clients_factory_1.ClientFactory.toJson(client));
                return clients_factory_1.ClientFactory.jsonToModel(clientEntityCreated);
            }
            catch (error) {
                throw new client_exception_1.ClientException("Ocurrio un error al guardar el monto");
            }
        });
    }
    updateClient(idCliente, client) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientsRepository = db_1.AppDataSource.getRepository(clientes_entity_1.ClientEntity);
            const clientEntityUpdated = yield clientsRepository.save(clients_factory_1.ClientFactory.toJson(client));
            return clients_factory_1.ClientFactory.jsonToModel(clientEntityUpdated);
        });
    }
    deleteClient(idCliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientsRepository = db_1.AppDataSource.getRepository(clientes_entity_1.ClientEntity);
                yield clientsRepository.delete(idCliente);
            }
            catch (error) {
                throw new client_exception_1.ClientException("Ocurrio un error al eliminar el cliente");
            }
        });
    }
}
exports.ClientAdapterMySql = ClientAdapterMySql;
