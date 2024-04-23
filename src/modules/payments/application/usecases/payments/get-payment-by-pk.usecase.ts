import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { PaymentsRepository } from "../../../domain/repositories/payments.repository";
import { Payment } from "../../../domain/models/payments";

export class GetPaymentByPkUseCase implements UseCase<Payment>{
    constructor (private paymentsRepository: PaymentsRepository){}

    async run(idPlazo: number): Promise<Payment>{
        const payment: Payment = await this.paymentsRepository.getPaymentByPk(idPlazo)
        return payment;
    }
}