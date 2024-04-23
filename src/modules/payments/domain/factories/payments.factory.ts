import { Payment } from "../models/payments";

export class PaymentFactory{
    static populate(payment: Payment, fields: any){
        if (fields.idPlazos){
            payment.setIdPayment = fields.idPlazos;
        } else{
            payment.setIdPayment = undefined;
        }

        if(fields.plazos){
            payment.setPayment = fields.plazos;
        } else{
            payment.setPayment = undefined;
        }
    }

    static jsonToModel(fields: any){
        let payment = new Payment();

        if (fields.idPlazos){
            payment.setIdPayment = fields.idPlazos;
        } else{
            payment.setIdPayment = undefined;
        }

        if (fields.plazos){
            payment.setPayment = fields.plazos;
        } else{
            payment.setPayment = undefined
        }

        return payment;
    }

    static toJson(payment: Payment): any{
        return{
            idPlazos: payment.getIdPayment,
            plazos: payment.getPayment
        };
    }
}