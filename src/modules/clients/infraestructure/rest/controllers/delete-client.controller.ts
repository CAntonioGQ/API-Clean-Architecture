import { Request, Response } from "express";
import { Client } from "../../../domain/models/clients";
import { ClientFactory } from "../../../domain/factories/clients.factory";
import { ClientException } from "../../../domain/exceptions/client.exception";
import { DeleteClientUseCase } from "../../../application/usescases/clients/delete-client.usecase";

export class DeleteClientController{
    constructor(private deleteClientUseCase: DeleteClientUseCase){}

    async run(req: Request, res: Response){
        try {
            const idCliente: number = parseInt(req.params.idCliente);
            const clientDeleted = await this.deleteClientUseCase.run(idCliente);
            return res.json({ ok: true, data: clientDeleted });
          } catch (err) {
            return res.json({ ok: false, message: err });
          }
    }
}