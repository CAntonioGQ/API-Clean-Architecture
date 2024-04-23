import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { AmountsRepository } from "../../../domain/repositories/amounts.repository";
import { Amount } from "../../../domain/models/amounts";

export class GetAmountByPkUseCase implements UseCase<Amount>{
    constructor (private amountsRepository: AmountsRepository){}

    async run(idMonto: number): Promise<Amount>{
        const amount: Amount = await this.amountsRepository.getAmountByPk(idMonto)
        return amount
    }
}