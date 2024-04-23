import { Payment } from "../models/payments";

export abstract class PaymentsRepository{
    abstract getPayments(params: any): Promise<any>;
    abstract getPaymentByPk(idPlazos: number): Promise<Payment>;
    abstract createPayment(payment: Payment): Promise<Payment>;
    abstract updatePayment(idPlazos: number, payment: Payment): Promise<Payment>;
    abstract deletePayment(idPlazos: number): Promise<void>;
}