import { Request, Response } from "express";
import { Amount } from "../../../domain/models/amounts";
import { AmountFactory } from "../../../domain/factories/amounts.factory";
import { AmountException } from "../../../domain/exceptions/amount.exception";
import { UpdateAmountUseCase } from "../../../application/usecases/amounts/update-amount-usecase";

export class UpdateAmountController {
  constructor(private updateAmountUseCase: UpdateAmountUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const idMonto = parseInt(req.params.idMonto);
      const amount = new Amount();
      AmountFactory.populate(amount, req.body);
      const amountUpdated = await this.updateAmountUseCase.run(idMonto, amount);
      return res.json({ ok: true, data: amountUpdated });
    } catch (err) {
      if (err instanceof AmountException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al actualizar el monto" });
    }
  }
}