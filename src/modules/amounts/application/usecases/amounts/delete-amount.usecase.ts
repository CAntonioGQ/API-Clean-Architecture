import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Amount } from "../../../domain/models/amounts";
import { AmountsRepository } from "../../../domain/repositories/amounts.repository";

export class DeleteAmountUseCase implements UseCase<void> {
  constructor(private amountsRepository: AmountsRepository) {}

  async run(idMonto: number): Promise<void> {
    const amount: Amount = await this.amountsRepository.getAmountByPk(idMonto);
    if (!amount) {
      throw new Error("Monto no encontrado");
    }
    await this.amountsRepository.deleteAmount(idMonto);
  }
}