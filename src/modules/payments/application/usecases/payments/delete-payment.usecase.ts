import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Payment } from "../../../domain/models/payments";
import { PaymentsRepository } from "../../../domain/repositories/payments.repository";

export class DeletePaymentUseCase implements UseCase<void>{
    constructor (private paymentsRepository: PaymentsRepository){}

    async run(idPlazo: number): Promise<void>{
        const payment: Payment = await this.paymentsRepository.getPaymentByPk(idPlazo);
        if(!payment){
            throw new Error("Plazo no encontrado")
        }
        await this.paymentsRepository.deletePayment(idPlazo);
    }
}