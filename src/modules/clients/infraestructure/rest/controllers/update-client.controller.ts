import { Request, Response } from "express";
import { Client } from "../../../domain/models/clients";
import { ClientFactory } from "../../../domain/factories/clients.factory";
import { ClientException } from "../../../domain/exceptions/client.exception";
import { UpdateClientUseCase } from "../../../application/usescases/clients/update-client-usecase";

export class UpdateClientController{
    constructor(private updateClienteUseCase: UpdateClientUseCase){}

    async run(req: Request, res:Response){
        try {
            const idCliente = parseInt(req.params.idCliente);
            const client = new Client();
            ClientFactory.populate(client, req.body);
            const clientUpdated = await this.updateClienteUseCase.run(idCliente, client);
            return res.json({ ok: true, data: clientUpdated });
          } catch (err) {
            return res.json({ ok: false, message: err });
          }
    }
}