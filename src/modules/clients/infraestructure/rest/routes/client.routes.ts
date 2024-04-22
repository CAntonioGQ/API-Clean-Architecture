import { Router } from "express";
import { createClient, deleteClient, getClients, getClientByPk, updateClient } from "../controllers/clientes.controller";

export class ClientRoutes {
  run() {
    const clientRoutes = Router();
    clientRoutes.get('/', getClients);
    clientRoutes.get('/:idClientes', getClientByPk);
    clientRoutes.post('/', createClient);
    clientRoutes.put('/:idClientes', updateClient);
    clientRoutes.delete('/:idClientes', deleteClient);
    return clientRoutes;
  }
}