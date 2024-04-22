import { Router } from "express";
import { createClient, deleteClient, getClients, getClientByPk, updateClient } from "../controllers/clientes.controller";

export class ClientRoutes {
  run() {
    const clientRoutes = Router();
    clientRoutes.get('/', getClients);
    clientRoutes.get('/:idCliente', getClientByPk);
    clientRoutes.post('/', createClient);
    clientRoutes.put('/:idCliente', updateClient);
    clientRoutes.delete('/:idCliente', deleteClient);
    return clientRoutes;
  }
}