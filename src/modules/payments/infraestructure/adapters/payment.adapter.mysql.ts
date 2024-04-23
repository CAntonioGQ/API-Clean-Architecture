import { Payment } from "../../domain/models/payments";
import { PaymentFactory } from "../../domain/factories/payments.factory";
import { PaymentsRepository } from "../../domain/repositories/payments.repository";
import { PaymentEntity } from "../entities/plazos.entity";
import { AppDataSource } from "../../../../config/database/db";
import { PaymentException } from "../../domain/exceptions/payment.exception";

export class PaymentAdapterMySql implements PaymentsRepository{
    async getPayments(params:any): Promise<Payment[]> {
        const paymentRepository = AppDataSource.getRepository(PaymentEntity);
        const paymentEntities = await paymentRepository.find(params);
        const payments: Payment[] = paymentEntities.map(paymentEntity => PaymentFactory.jsonToModel(paymentEntity));
        console.log(payments); // Aquí se imprime el arreglo, pero no se devuelve
        return payments;
      }

    async  getPaymentByPk(idPlazo: number): Promise<Payment> {
        const paymentRepository = AppDataSource.getRepository(PaymentEntity);
        const paymentEntity = await paymentRepository.findOne({ where: { idPlazos: idPlazo } });
        if (!paymentEntity){
            throw new PaymentException("No se encontró el plazo");
        }
        return PaymentFactory.jsonToModel(paymentEntity);
    }

    async createPayment(payment: Payment): Promise<Payment>{
        const paymentRepository = AppDataSource.getRepository(PaymentEntity);
        const paymentEntity = PaymentFactory.toJson(payment);
        const createdPaymentEntity = await paymentRepository.save(paymentEntity);
        return PaymentFactory.jsonToModel(createdPaymentEntity);
    }

     async updatePayment(idPlazo: number, payment: Payment): Promise<Payment> {
        const paymentRepository = AppDataSource.getRepository(PaymentEntity);
        const existingPaymentEntity = await paymentRepository.findOne({ where: { idPlazos: idPlazo }});
        if (!existingPaymentEntity){
            throw new PaymentException("No se encontró el plazo");
        }
        existingPaymentEntity.plazos = payment.getPayment || existingPaymentEntity.plazos;
        const updatedPaymentEntity = await paymentRepository.save(existingPaymentEntity);
        return PaymentFactory.jsonToModel(updatedPaymentEntity);
    }

    async  deletePayment(idPlazo: number): Promise<void> {
        const paymentRepository = AppDataSource.getRepository(PaymentEntity);
        const existingPaymentEntity = await paymentRepository.findOne({ where: { idPlazos: idPlazo }});
        if (!existingPaymentEntity){
            throw new PaymentException("No se encontró el plazo")
        }
       await paymentRepository.delete(idPlazo); 
    }

    
}