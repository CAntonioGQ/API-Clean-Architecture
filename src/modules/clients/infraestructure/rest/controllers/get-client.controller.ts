import { Request, Response } from "express";
import { ClientException } from "../../../domain/exceptions/client.exception";
import { GetClientUseCase } from "../../../application/usescases/clients/get-client.usecase";

export class GetClientController {
  constructor(private getClientUseCase: GetClientUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const data = await this.getClientUseCase.run(req.query);

      if (!data || data.length === 0) {
        return res.json({ ok: true, data: [] });
      }

      const clients = data.map((client: any) => ({
        idClientes: client.getIdClient,
        nombreCliente: client.getNameClient,
      }));

      return res.json({ ok: true, data: clients });
    } catch (err: any) {
        if (err instanceof ClientException) {
          return res.json({ ok: false, message: err.message });
        } else if (typeof err === 'object' && err !== null && 'message' in err) {
          return res.json({ ok: false, message: err.message });
        } else {
          return res.json({ ok: false, message: 'Error desconocido' });
        }
      }
  }
}