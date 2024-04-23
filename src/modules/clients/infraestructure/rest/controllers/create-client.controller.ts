import { Request, Response } from "express";
import { Client } from "../../../domain/models/clients";
import { ClientFactory } from "../../../domain/factories/clients.factory";
import { ClientException } from "../../../domain/exceptions/client.exception";
import { CreateClientUseCase } from "../../../application/usescases/clients/create-client.usecase";

export class CreateClientController{

    constructor(private createClientUseCase: CreateClientUseCase) {}
    
    async run(req: Request, res: Response){
        try {
            const client = new Client();
            ClientFactory.populate(client, req.body);
            const data = await this.createClientUseCase.run(client);
            return res.json({ ok: true, data });
          } catch (err) {
            return res.json({ ok: false, message: err });
          }
    }
}