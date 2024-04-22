import { Client } from "../models/clients";

export abstract class ClientsRepository {
    abstract getClients(params: any): Promise<any>;
    abstract getClientByPk(idClientes: number): Promise<Client>;
    abstract createClient(client: Client): Promise<Client>;
    abstract updateClient(idClientes: number, client: Client): Promise<Client>;
    abstract deleteClient(idClientes: number): Promise<void>;
}
