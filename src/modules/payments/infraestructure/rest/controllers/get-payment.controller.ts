import { Request, Response } from "express";
import { PaymentException } from "../../../domain/exceptions/payment.exception";
import { GetPaymentUseCase } from "../../../application/usecases/payments/get-payment.usecase";

export class GetPaymentController {
  constructor(private getPaymentUseCase: GetPaymentUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const data = await this.getPaymentUseCase.run(req.query);
      if (!data || data.length === 0) {
        return res.json({ ok: true, data: [] });
      }
      const payments = data.map((payment: any) => ({
        idPlazos: payment.getIdPayment,
        plazos: payment.getPayment,
      }));
      return res.json({ ok: true, data: payments });
    } catch (err) {
      if (err instanceof PaymentException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al obtener los plazos" });
    }
  }
}