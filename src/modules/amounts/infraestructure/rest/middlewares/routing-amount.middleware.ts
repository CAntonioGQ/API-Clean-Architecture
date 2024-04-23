import { AmountRoutes } from "../routes/amount.routes";

export class RoutingAmount {
  run(server: any) {
    const amountRoutes = new AmountRoutes();
    server.app.use('/montos', amountRoutes.run());
  }
}