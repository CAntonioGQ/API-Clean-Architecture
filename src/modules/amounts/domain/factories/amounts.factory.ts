import { Amount } from "../models/amounts";

export class AmountFactory {
  static populate(amount: Amount, fields: any) {
    if (fields.idMontos) {
      amount.setIdAmount = fields.idMontos;
    } else {
      amount.setIdAmount = undefined;
    }
    
    if (fields.montos) {
      amount.setAmount = fields.montos;
    } else {
      amount.setAmount = undefined;
    }
  }
  
  static jsonToModel(fields: any) {
    let amount = new Amount();
    
    if (fields.idMontos) {
      amount.setIdAmount = fields.idMontos;
    } else {
      amount.setIdAmount = undefined;
    }
    
    if (fields.montos) {
      amount.setAmount = fields.montos;
    } else {
      amount.setAmount = undefined;
    }
    
    return amount;
  }
  
  static toJson(amount: Amount): any {
    return {
      idMontos: amount.getIdAmount,
      montos: amount.getAmount
    };
  }
}