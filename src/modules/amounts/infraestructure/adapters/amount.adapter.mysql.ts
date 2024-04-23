import { Amount } from "../../domain/models/amounts";
import { AmountFactory } from "../../domain/factories/amounts.factory";
import { AmountsRepository } from "../../domain/repositories/amounts.repository";
import { AmountEntity } from "../entities/montos.entity";
import { AppDataSource } from "../../../../config/database/db";
import { AmountException } from "../../domain/exceptions/amount.exception";

export class AmountAdapterMySql implements AmountsRepository {
  async getAmounts(params: any): Promise<Amount[]> {
    const amountRepository = AppDataSource.getRepository(AmountEntity);
    const amountEntities = await amountRepository.find(params);
    const amounts: Amount[] = amountEntities.map(amountEntity =>
      AmountFactory.jsonToModel(amountEntity)
    );
    return amounts;
  }

  async getAmountByPk(idMonto: number): Promise<Amount> {
    const amountRepository = AppDataSource.getRepository(AmountEntity);
    const amountEntity = await amountRepository.findOne({ where: { idMontos: idMonto } });
    if (!amountEntity) {
      throw new AmountException("No se encontró el monto");
    }
    return AmountFactory.jsonToModel(amountEntity);
  }

  async createAmount(amount: Amount): Promise<Amount> {
    const amountRepository = AppDataSource.getRepository(AmountEntity);
    const amountEntity = AmountFactory.toJson(amount);
    const createdAmountEntity = await amountRepository.save(amountEntity);
    return AmountFactory.jsonToModel(createdAmountEntity);
  }

  async updateAmount(idMonto: number, amount: Amount): Promise<Amount> {
    const amountRepository = AppDataSource.getRepository(AmountEntity);
    const existingAmountEntity = await amountRepository.findOne({ where: { idMontos: idMonto } });
    if (!existingAmountEntity) {
      throw new AmountException("No se encontró el monto");
    }
    existingAmountEntity.montos = amount.getAmount || existingAmountEntity.montos;
    const updatedAmountEntity = await amountRepository.save(existingAmountEntity);
    return AmountFactory.jsonToModel(updatedAmountEntity);
  }

  async deleteAmount(idMonto: number): Promise<void> {
    const amountRepository = AppDataSource.getRepository(AmountEntity);
    const existingAmountEntity = await amountRepository.findOne({ where: { idMontos: idMonto } });
    if (!existingAmountEntity) {
      throw new AmountException("No se encontró el monto");
    }
    await amountRepository.delete(idMonto);
  }
}