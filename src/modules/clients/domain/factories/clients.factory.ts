import { Client } from "../models/clients";

export class ClientFactory {
  static populate(client: Client, fields: any) {
    if (fields.idCliente) {
      client.setIdClient = fields.idCliente;
    } else {
      client.setIdClient = undefined;
    }
    
    if (fields.nombreCliente) {
      client.setNameClient = fields.nombreCliente;
    } else {
      client.setNameClient = undefined;
    }
  }
  
  static jsonToModel(fields: any) {
    let client = new Client();
    
    if (fields.idCliente) {
      client.setIdClient = fields.idCliente;
    } else {
      client.setIdClient = undefined;
    }
    
    if (fields.nombreCliente) {
      client.setNameClient = fields.nombreCliente;
    } else {
      client.setNameClient = undefined;
    }
    
    return client;
  }
  
  static toJson(client: Client): any {
    return {
      idCliente: client.getIdClient,
      nombreCliente: client.getNameClient
    };
  }
}