import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Payment } from "../../../domain/models/payments";
import { PaymentsRepository } from "../../../domain/repositories/payments.repository";

export class UpdatePaymentUseCase implements UseCase<Payment>{
    constructor (private paymentsRepository: PaymentsRepository){}

    async run(idPlazo: number, payment: Payment): Promise<Payment>{
        const paymentUpdated: Payment = await this.paymentsRepository.updatePayment(idPlazo, payment);
        return paymentUpdated;
    }
}