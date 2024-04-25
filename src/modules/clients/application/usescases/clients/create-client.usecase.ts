import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Client } from "../../../domain/models/clients";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";
import { ClientException } from "../../../domain/exceptions/client.exception";

export class CreateClientUseCase implements UseCase<Client>{
    constructor(private clientsRepository: ClientsRepository){}

    async run(client: Client): Promise<Client> {
        if (!client.getNameClient) {
          throw new Error("El nombre no puede estar vacío");
        }
        const clientCreated: Client = await this.clientsRepository.createClient(client)
        return clientCreated;
      }
}