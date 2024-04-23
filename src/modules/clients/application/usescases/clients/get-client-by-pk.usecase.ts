import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";
import { Client } from "../../../domain/models/clients";

export class GetClientByPkUseCase implements UseCase<Client>{
    constructor (private clientsRepository: ClientsRepository){}

    async run(idCliente: number): Promise<Client>{
        const client: Client = await this.clientsRepository.getClientByPk(idCliente)
        return client
    }
}