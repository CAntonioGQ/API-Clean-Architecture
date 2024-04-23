import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Client } from "../../../domain/models/clients";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";

export class DeleteClientUseCase implements UseCase<void> {
  constructor(private clientsRepository: ClientsRepository) {}

  async run(idCliente: number): Promise<void> {
    const client: Client = await this.clientsRepository.getClientByPk(idCliente);
    if (!client) {
      throw new Error("Cliente no encontrado");
    }
    await this.clientsRepository.deleteClient(idCliente);
  }
}