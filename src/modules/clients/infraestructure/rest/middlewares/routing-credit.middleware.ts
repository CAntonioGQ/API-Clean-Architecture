import { ClientRoutes } from "../routes/client.routes";

export class RoutingCredit {
  run(server: any) {
    const clientRoutes = new ClientRoutes();
    server.app.use('/clientes', clientRoutes.run());
  }
}