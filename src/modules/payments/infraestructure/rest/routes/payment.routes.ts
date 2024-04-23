import { Router } from "express";
import { createPaymentController, getPaymentController, updatePaymentController, deletePaymentController, getPaymentByPkController } from "../../containers/payment.container";

export class PaymentRoutes {
  run() {
    const paymentRoutes = Router();
    paymentRoutes.get('/', (req, res) => getPaymentController.run(req, res));
    paymentRoutes.get('/:idPlazo', (req, res) => getPaymentByPkController.run(req, res));
    paymentRoutes.post('/', (req, res) => createPaymentController.run(req, res));
    paymentRoutes.put('/:idPlazo', (req, res) => updatePaymentController.run(req, res));
    paymentRoutes.delete('/:idPlazo', (req, res) => deletePaymentController.run(req, res));
    return paymentRoutes;
  }
}