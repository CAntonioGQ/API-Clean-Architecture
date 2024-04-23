
import { Router } from "express";
import { createAmountController, getAmountController, updateAmountController, deleteAmountController, getAmountByPkController } from "../../containers/amount.container";

export class AmountRoutes {
  run() {
    const amountRoutes = Router();
    amountRoutes.get('/', (req, res) => getAmountController.run(req, res));
    amountRoutes.get('/:idMonto', (req, res) => getAmountByPkController.run(req, res));
    amountRoutes.post('/', (req, res) => createAmountController.run(req, res));
    amountRoutes.put('/:idMonto', (req, res) => updateAmountController.run(req, res));
    amountRoutes.delete('/:idMonto', (req, res) => deleteAmountController.run(req, res));
    return amountRoutes;
  }
}