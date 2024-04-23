import { Request, Response } from "express";
import { Payment } from "../../../domain/models/payments";
import { PaymentFactory } from "../../../domain/factories/payments.factory";
import { PaymentException } from "../../../domain/exceptions/payment.exception";
import { CreatePaymentUseCase } from "../../../application/usecases/payments/create-payment.usecase";
import { AmountException } from "../../../../amounts/domain/exceptions/amount.exception";

export class CreatePaymentController{
    constructor(private createPaymentUseCase: CreatePaymentUseCase){}

    async run(req: Request, res: Response){
        try {
            const payment = new Payment();
            PaymentFactory.populate(payment, req.body);
            const data = await this.createPaymentUseCase.run(payment);
            return res.json({ok: true, data});
        } catch (err) {
            if(err instanceof AmountException){
                return res.status(400).json({ ok: false, message: err.message});
            }
            return res.status(500).json({ ok: false, message: "Error al crear el plazo"});
        }
    }
}