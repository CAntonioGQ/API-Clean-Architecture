import { Request, Response } from "express";
import { PaymentException } from "../../../domain/exceptions/payment.exception";
import { DeletePaymentUseCase } from "../../../application/usecases/payments/delete-payment.usecase";

export class DeletePaymentController{
    constructor(private deletePaymentUseCase: DeletePaymentUseCase){}

    async run(req: Request, res: Response){
        try {
            const idPlazo: number = parseInt(req.params.idPlazo);
            await this.deletePaymentUseCase.run(idPlazo);
            return res.json({ok: true, message: "Plazo eliminado correctamente"});
        } catch (err) {
            if(err instanceof PaymentException){
                return res.status(400).json({ ok: false, message: err.message });
            }
            return res.status(500).json({ ok: false, message: "Error al eliminar el plazo"});
        }
    }
}