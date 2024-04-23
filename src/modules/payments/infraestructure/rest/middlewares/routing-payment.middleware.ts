import { PaymentRoutes } from "../routes/payment.routes";

export class RoutingPayment {
  run(server: any) {
    const paymentRoutes = new PaymentRoutes();
    server.app.use('/plazos', paymentRoutes.run());
  }
}