// client.routes.ts
import { Router } from "express";
import { createClientController, getClientController, updateClientController, deleteClientController, getClientByPkController } from "../../containers/client.container";

export class ClientRoutes {
  run() {
    const clientRoutes = Router();
    clientRoutes.get('/', (req, res) => getClientController.run(req, res));
    clientRoutes.get('/:idCliente', (req, res) => getClientByPkController.run(req, res));
    clientRoutes.post('/', (req, res) => createClientController.run(req, res));
    clientRoutes.put('/:idCliente', (req, res) => updateClientController.run(req, res));
    clientRoutes.delete('/:idCliente', (req, res) => deleteClientController.run(req, res));
    return clientRoutes;
  }
}