import { RoutingClient } from "../../modules/clients/infraestructure/rest/middlewares/routing-client.middleware";

export class RoutingModule {
  run(server: any) {
    const routingClient = new RoutingClient();
    server.app.use(routingClient.run(server));

    return (req: any, response: any, next: any) => {
      next();
    };
  }
}

export const routingModules = (server: any) => {
  const routingClient = new RoutingClient();
  server.app.use(routingClient.run(server));

  return (req: any, response: any, next: any) => {
    next();
  };
};