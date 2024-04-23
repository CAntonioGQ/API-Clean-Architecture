import { Request, Response } from "express";
import { Payment } from "../../../domain/models/payments";
import { PaymentFactory } from "../../../domain/factories/payments.factory";
import { PaymentException } from "../../../domain/exceptions/payment.exception";
import { UpdatePaymentUseCase } from "../../../application/usecases/payments/update-payment-usecase";

export class UpdatePaymentController{
    constructor(private updatePaymentUseCase: UpdatePaymentUseCase){}

    async run(req: Request, res: Response){
        try {
            const idPlazo = parseInt(req.params.idPlazo);
            const payment = new Payment();
            PaymentFactory.populate(payment, req.body);
            const paymentUpdated = await this.updatePaymentUseCase.run(idPlazo, payment);
            return res.json({ ok: true, data: paymentUpdated });
        } catch (err) {
            if(err instanceof PaymentException){
                return res.status(400).json({ ok: false, message: err.message});
            }
            return res.status(500).json({ ok: false, message: "Error al actualizar el plazo"})
        }
    }
}