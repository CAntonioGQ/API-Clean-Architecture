import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Amount } from "../../../domain/models/amounts";
import { AmountsRepository } from "../../../domain/repositories/amounts.repository";

export class UpdateAmountUseCase implements UseCase<Amount> {
  constructor(private amountsRepository: AmountsRepository) {}

  async run(idMonto: number, amount: Amount): Promise<Amount> {
    const amountUpdated: Amount = await this.amountsRepository.updateAmount(idMonto, amount);
    return amountUpdated;
  }
}