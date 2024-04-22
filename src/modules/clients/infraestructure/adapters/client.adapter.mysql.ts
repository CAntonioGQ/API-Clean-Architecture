import { Client } from "../../domain/models/clients";
import { ClientFactory } from "../../domain/factories/clients.factory";
import { ClientsRepository } from "../../domain/repositories/clients.repository";
import { ClientEntity } from "../entities/clientes.entity";
import { AppDataSource } from "../../../../database/db";
import { ClientException } from "../../domain/exceptions/client.exception";


export class ClientAdapterMySql implements ClientsRepository {


    async getClients(params: any): Promise<any> {
        const clientRepository = AppDataSource.getRepository(ClientEntity);
        const clientsEntities = await clientRepository.findAndCount();
        let clients: Client[] = [];
        clientsEntities.forEach(clientEntity => {
            clients.push(ClientFactory.jsonToModel(clientEntity));
        });
        return clients;
    }
    

    async getClientByPk(idCliente: number): Promise<any> {
        const clientRepository = AppDataSource.getRepository(ClientEntity);
        const clientEntity = await clientRepository.findOne({where:{idClientes:idCliente}});
        if(!clientEntity){
            throw new ClientException("No se encontró el cliente");
        }
        return ClientFactory.jsonToModel(clientEntity)
        
    }

    async createClient(client: Client): Promise<Client> {
        try {

            const clientsRepository = AppDataSource.getRepository(ClientEntity);
            const clientEntityCreated = await clientsRepository.save(ClientFactory.toJson(client));
            return ClientFactory.jsonToModel(clientEntityCreated)
            
        } catch (error) {
            throw new ClientException("Ocurrio un error al guardar el monto")
        }
    
    }

    async updateClient(idCliente: number, client: Client): Promise<any> {
        const clientsRepository = AppDataSource.getRepository(ClientEntity);
        const clientEntityUpdated = await clientsRepository.save(ClientFactory.toJson(client));

        return ClientFactory.jsonToModel(clientEntityUpdated);
        
    }

    async deleteClient(idCliente: number): Promise<void> {
        try {
          const clientsRepository = AppDataSource.getRepository(ClientEntity);
          await clientsRepository.delete(idCliente);
        } catch (error) {
          throw new ClientException("Ocurrio un error al eliminar el cliente");
        }
      }

}