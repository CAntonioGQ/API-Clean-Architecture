import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Amount } from "../../../domain/models/amounts";
import { AmountsRepository } from "../../../domain/repositories/amounts.repository";
import { AmountException } from "../../../domain/exceptions/amount.exception";

export class CreateAmountUseCase implements UseCase<Amount>{
    constructor(private amountsRepository: AmountsRepository){}

    async run(amount: Amount): Promise<Amount> {
        if (!amount.getAmount) {
          throw new Error("El nombre no puede estar vacío");
        }
        const amountCreated: Amount = await this.amountsRepository.createAmount(amount)
        return amountCreated;
      }
    
}