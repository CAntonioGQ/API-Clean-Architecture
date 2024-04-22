import { Client } from "../models/clients";

export abstract class ClientsRepository {
    abstract getClients(params: any): Promise<Client[]>;
    abstract getClientByPk(idCliente: number): Promise<Client>;
    abstract createClient(client: Client): Promise<Client>;
    abstract updateClient(idCliente: number, client: Client): Promise<Client>;
    abstract deleteClient(idCliente: number): Promise<void>;
}
