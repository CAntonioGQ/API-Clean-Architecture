import { Client } from "../../../domain/models/clients";
import { ClientsRepository } from "../../../domain/repositories/clients.repository";

export class ClientUseCase {
  private clientsRepository: ClientsRepository;

  constructor(clientsRepository: ClientsRepository) {
    this.clientsRepository = clientsRepository;
  }

  async getClients(params: any): Promise<Client[]> {
    const clients: Client[] = await this.clientsRepository.getClients(params);
    return clients;
  }

  async getClientByPk(idCliente: number): Promise<Client> {
    const client: Client = await this.clientsRepository.getClientByPk(idCliente);
    return client;
  }

  async createClient(client: Client): Promise<Client> {
    if (!client.getNameClient) {
      throw new Error("El nombre no puede estar vacío");
    }
    return this.clientsRepository.createClient(client);
  }

  async updateClient(idCliente: number, client: Client): Promise<Client> {
    if (!client.getNameClient) {
      throw new Error("El nombre no puede estar vacío");
    }
    return this.clientsRepository.updateClient(idCliente, client);
  }

  async deleteClient(idCliente: number): Promise<void> {
    const client: Client = await this.clientsRepository.getClientByPk(idCliente);
    if (!client) {
      throw new Error("Cliente no encontrado");
    }
    await this.clientsRepository.deleteClient(idCliente);
  }
}