import { CreatePaymentUseCase } from "../../application/usecases/payments/create-payment.usecase";
import { DeletePaymentUseCase } from "../../application/usecases/payments/delete-payment.usecase";
import { GetPaymentByPkUseCase } from "../../application/usecases/payments/get-payment-by-pk.usecase";
import { GetPaymentUseCase } from "../../application/usecases/payments/get-payment.usecase";
import { UpdatePaymentUseCase } from "../../application/usecases/payments/update-payment-usecase";
import { PaymentAdapterMySql } from "../adapters/payment.adapter.mysql";
import { CreatePaymentController } from "../rest/controllers/create-payment.controller";
import { DeletePaymentController } from "../rest/controllers/delete-payment.controller";
import { GetPaymentByPkController } from "../rest/controllers/get-payment-by-pk.controller";
import { GetPaymentController } from "../rest/controllers/get-payment.controller";
import { UpdatePaymentController } from "../rest/controllers/update-payment.controller";

const paymentRepository = new PaymentAdapterMySql();

const createPaymentUseCase = new CreatePaymentUseCase(paymentRepository);
const getPaymentUseCase = new GetPaymentUseCase(paymentRepository);
const updatePaymentUseCase = new UpdatePaymentUseCase(paymentRepository);
const deletePaymentUseCase = new DeletePaymentUseCase(paymentRepository);
const getPaymentByPkCaseUse = new GetPaymentByPkUseCase(paymentRepository);

export const createPaymentController = new CreatePaymentController(createPaymentUseCase);
export const getPaymentController = new GetPaymentController(getPaymentUseCase);
export const updatePaymentController = new UpdatePaymentController(updatePaymentUseCase);
export const deletePaymentController = new DeletePaymentController(deletePaymentUseCase);
export const getPaymentByPkController = new GetPaymentByPkController(getPaymentByPkCaseUse);