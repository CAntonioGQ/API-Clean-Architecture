import { ClientAdapterMySql } from "../../../infraestructure/adapters/client.adapter.mysql";
import { ClientUseCase } from "./clients.usecase";

const clientsRepository = new ClientAdapterMySql();
const clientUseCase = new ClientUseCase(clientsRepository);

export default clientUseCase