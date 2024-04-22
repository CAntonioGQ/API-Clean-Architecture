"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_adapter_mysql_1 = require("../../../infraestructure/adapters/client.adapter.mysql");
const clients_usecase_1 = require("./clients.usecase");
const clientsRepository = new client_adapter_mysql_1.ClientAdapterMySql();
const clientUseCase = new clients_usecase_1.ClientUseCase(clientsRepository);
exports.default = clientUseCase;
