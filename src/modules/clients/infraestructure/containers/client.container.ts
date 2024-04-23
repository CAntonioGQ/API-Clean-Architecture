import { CreateClientUseCase } from "../../application/usescases/clients/create-client.usecase";
import { CreateClientController } from "../rest/controllers/create-client.controller";
import { GetClientUseCase } from "../../application/usescases/clients/get-client.usecase";
import { GetClientController } from "../rest/controllers/get-client.controller";
import { UpdateClientUseCase } from "../../application/usescases/clients/update-client-usecase";
import { UpdateClientController } from "../rest/controllers/update-client.controller";
import { DeleteClientUseCase } from "../../application/usescases/clients/delete-client.usecase";
import { DeleteClientController } from "../rest/controllers/delete-client.controller";
import { GetClientByPkUseCase } from "../../application/usescases/clients/get-client-by-pk.usecase";
import { GetClientByPkController } from "../rest/controllers/get-client-by-pk.controller";
import { ClientAdapterMySql } from "../adapters/client.adapter.mysql";

const clientRepository = new ClientAdapterMySql();

const createClientUseCase = new CreateClientUseCase(clientRepository);
const getClientUseCase = new GetClientUseCase(clientRepository);
const updateClientUseCase = new UpdateClientUseCase(clientRepository);
const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
const getClientByPkUseCase = new GetClientByPkUseCase(clientRepository);

export const createClientController = new CreateClientController(createClientUseCase);
export const getClientController = new GetClientController(getClientUseCase);
export const updateClientController = new UpdateClientController(updateClientUseCase);
export const deleteClientController = new DeleteClientController(deleteClientUseCase);
export const getClientByPkController = new GetClientByPkController(getClientByPkUseCase);