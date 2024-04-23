import { Request, Response } from "express";
import { AmountException } from "../../../domain/exceptions/amount.exception";
import { DeleteAmountUseCase } from "../../../application/usecases/amounts/delete-amount.usecase";

export class DeleteAmountController {
  constructor(private deleteAmountUseCase: DeleteAmountUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const idMonto: number = parseInt(req.params.idMonto);
      await this.deleteAmountUseCase.run(idMonto);
      return res.json({ ok: true, message: "Monto eliminado correctamente" });
    } catch (err) {
      if (err instanceof AmountException) {
        return res.status(400).json({ ok: false, message: err.message });
      }
      return res.status(500).json({ ok: false, message: "Error al eliminar el monto" });
    }
  }
}