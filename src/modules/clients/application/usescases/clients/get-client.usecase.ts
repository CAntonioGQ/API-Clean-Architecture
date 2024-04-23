import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";

export class GetClientUseCase implements UseCase<any[]>{
    constructor (private clientsRepository: ClientsRepository){}

    async run(params:any): Promise <any>{
        const clients: any = await this.clientsRepository.getClients(params);
        return clients;
    }
}