import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { AmountsRepository } from "../../../domain/repositories/amounts.repository";

export class GetAmountUseCase implements UseCase<any[]>{
    constructor (private amountsRepository: AmountsRepository){}

    async run(params:any): Promise <any>{
        const amounts: any = await this.amountsRepository.getAmounts(params);
        return amounts;
    }
}