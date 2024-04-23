import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Payment } from "../../../domain/models/payments";
import { PaymentsRepository } from "../../../domain/repositories/payments.repository";
import { PaymentException } from "../../../domain/exceptions/payment.exception";

export class CreatePaymentUseCase implements UseCase<Payment>{
    constructor (private paymentsRepository: PaymentsRepository){}

    async run(payment: Payment): Promise<Payment>{
        if(!payment.getPayment){
            throw new Error("El plazo no puede estar vacio");
        }
        const paymentCreated: Payment = await this.paymentsRepository.createPayment(payment)
        return paymentCreated;
    }
}