import { Request, Response } from "express";
import { PaymentException } from "../../../domain/exceptions/payment.exception";
import { GetPaymentByPkUseCase } from "../../../application/usecases/payments/get-payment-by-pk.usecase";

export class GetPaymentByPkController {
  constructor(private getPaymentByPkUseCase: GetPaymentByPkUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const idPlazo = parseInt(req.params.idPlazo);
      const data = await this.getPaymentByPkUseCase.run(idPlazo);
      return res.json({ ok: true, data });
    } catch (err) {
      if (err instanceof PaymentException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al obtener el plazo" });
    }
  }
}