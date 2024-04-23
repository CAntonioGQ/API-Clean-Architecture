import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Client } from "../../../domain/models/clients";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";

export class UpdateClientUseCase implements UseCase<Client> {
  constructor(private clientsRepository: ClientsRepository) {}

  async run(idCliente: number, client: Client): Promise<Client> {
    const clientUpdated: Client = await this.clientsRepository.updateClient(idCliente, client);
    return clientUpdated;
  }
}