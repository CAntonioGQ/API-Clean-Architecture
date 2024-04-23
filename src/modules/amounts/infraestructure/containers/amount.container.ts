import { DeleteClientUseCase } from "../../../clients/application/usescases/clients/delete-client.usecase";
import { CreateAmountUseCase } from "../../application/usecases/amounts/create-amount.usecase";
import { DeleteAmountUseCase } from "../../application/usecases/amounts/delete-amount.usecase";
import { GetAmountByPkUseCase } from "../../application/usecases/amounts/get-amount-by-pk.usecase";
import { GetAmountUseCase } from "../../application/usecases/amounts/get-amount.usecase";
import { UpdateAmountUseCase } from "../../application/usecases/amounts/update-amount-usecase";
import { AmountAdapterMySql } from "../adapters/amount.adapter.mysql";
import { CreateAmountController } from "../rest/controllers/create-amount.controller";
import { DeleteAmountController } from "../rest/controllers/delete-amount.controller";
import { GetAmountByPkController } from "../rest/controllers/get-amount-by-pk.controller";
import { GetAmountController } from "../rest/controllers/get-amount.controller";
import { UpdateAmountController } from "../rest/controllers/update-amount.controller";

const amountRepository = new AmountAdapterMySql();

const createAmountUseCase = new CreateAmountUseCase(amountRepository);
const getAmountUseCase = new GetAmountUseCase(amountRepository);
const updateAmountUseCase = new UpdateAmountUseCase(amountRepository); 
const deleteAmountUseCase = new DeleteAmountUseCase(amountRepository);
const getAmountByPkUseCase = new GetAmountByPkUseCase(amountRepository);

export const createAmountController = new CreateAmountController(createAmountUseCase);
export const getAmountController = new GetAmountController(getAmountUseCase);
export const updateAmountController = new UpdateAmountController(updateAmountUseCase);
export const deleteAmountController = new DeleteAmountController(deleteAmountUseCase);
export const getAmountByPkController = new GetAmountByPkController(getAmountByPkUseCase);