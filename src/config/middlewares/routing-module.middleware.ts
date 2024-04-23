import { RoutingClient } from "../../modules/clients/infraestructure/rest/middlewares/routing-client.middleware";
import { RoutingAmount } from "../../modules/amounts/infraestructure/rest/middlewares/routing-amount.middleware";

export class RoutingModule {
  run(server: any) {
    const routingClient = new RoutingClient();
    routingClient.run(server);

    const routingAmount = new RoutingAmount();
    routingAmount.run(server);
  }
}

export const routingModules = (server: any) => {
  const routingModule = new RoutingModule();
  routingModule.run(server);
};