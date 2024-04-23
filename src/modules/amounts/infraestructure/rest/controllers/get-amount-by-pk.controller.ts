import { Request, Response } from "express";
import { AmountException } from "../../../domain/exceptions/amount.exception";
import { GetAmountByPkUseCase } from "../../../application/usecases/amounts/get-amount-by-pk.usecase";

export class GetAmountByPkController {
  constructor(private getAmountByPkUseCase: GetAmountByPkUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const idMonto = parseInt(req.params.idMonto);
      const data = await this.getAmountByPkUseCase.run(idMonto);
      return res.json({ ok: true, data });
    } catch (err) {
      if (err instanceof AmountException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al obtener el monto" });
    }
  }
}