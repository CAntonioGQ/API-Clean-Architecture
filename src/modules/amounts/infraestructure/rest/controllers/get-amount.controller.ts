import { Request, Response } from "express";
import { AmountException } from "../../../domain/exceptions/amount.exception";
import { GetAmountUseCase } from "../../../application/usecases/amounts/get-amount.usecase";

export class GetAmountController {
  constructor(private getAmountUseCase: GetAmountUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const data = await this.getAmountUseCase.run(req.query);
      if (!data || data.length === 0) {
        return res.json({ ok: true, data: [] });
      }
      const amounts = data.map((amount: any) => ({
        idMontos: amount.getIdAmount,
        montos: amount.getAmount,
      }));
      return res.json({ ok: true, data: amounts });
    } catch (err) {
      if (err instanceof AmountException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al obtener los montos" });
    }
  }
}