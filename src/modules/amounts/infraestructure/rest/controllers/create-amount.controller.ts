import { Request, Response } from "express";
import { Amount } from "../../../domain/models/amounts";
import { AmountFactory } from "../../../domain/factories/amounts.factory";
import { AmountException } from "../../../domain/exceptions/amount.exception";
import { CreateAmountUseCase } from "../../../application/usecases/amounts/create-amount.usecase";

export class CreateAmountController {
  constructor(private createAmountUseCase: CreateAmountUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const amount = new Amount();
      AmountFactory.populate(amount, req.body);
      const data = await this.createAmountUseCase.run(amount);
      return res.json({ ok: true, data });
    } catch (err) {
      if (err instanceof AmountException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al crear el monto" });
    }
  }
}