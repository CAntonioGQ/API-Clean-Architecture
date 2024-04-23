import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { PaymentsRepository } from "../../../domain/repositories/payments.repository";

export class GetPaymentUseCase implements UseCase<any[]>{
    constructor (private paymentsRepository: PaymentsRepository){}

    async run(params:any): Promise<any>{
        const payments: any = await this.paymentsRepository.getPayments(params);
        return payments;
    }
}