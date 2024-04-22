"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoutes = void 0;
const express_1 = require("express");
const clientes_controller_1 = require("../controllers/clientes.controller");
class ClientRoutes {
    run() {
        const clientRoutes = (0, express_1.Router)();
        clientRoutes.get('/', clientes_controller_1.getClients);
        clientRoutes.get('/:idClientes', clientes_controller_1.getClientByPk);
        clientRoutes.post('/', clientes_controller_1.createClient);
        clientRoutes.put('/:idClientes', clientes_controller_1.updateClient);
        clientRoutes.delete('/:idClientes', clientes_controller_1.deleteClient);
        return clientRoutes;
    }
}
exports.ClientRoutes = ClientRoutes;
