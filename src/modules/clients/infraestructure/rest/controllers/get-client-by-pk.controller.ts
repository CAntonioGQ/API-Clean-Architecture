import { Request, Response } from "express";
import { GetClientByPkUseCase } from "../../../application/usescases/clients/get-client-by-pk.usecase";
import { ClientException } from "../../../domain/exceptions/client.exception";


export class GetClientByPkController{
    constructor(private getClientByPkUseCase: GetClientByPkUseCase){}

    async run(req: Request, res: Response){
        try {
            const idCliente = parseInt(req.params.idCliente);
            const data = await this.getClientByPkUseCase.run(idCliente);
            return res.json({ ok: true, data });
          } catch (err) {
            return res.json({ ok: false, message: err });
          }
    }
}