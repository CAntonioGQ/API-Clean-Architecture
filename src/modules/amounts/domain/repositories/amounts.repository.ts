import { Amount } from "../models/amounts";

export abstract class AmountsRepository {
    abstract getAmounts(params: any): Promise<any>;
    abstract getAmountByPk(idMontos: number): Promise<Amount>;
    abstract createAmount(amount: Amount): Promise<Amount>;
    abstract updateAmount(idMontos: number, amount: Amount): Promise<Amount>;
    abstract deleteAmount(idMontos: number): Promise<void>;
}