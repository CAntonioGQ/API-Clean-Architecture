import { DataSource } from "typeorm"
import { join } from "path"
import { ClientEntity } from "../../modules/clients/infraestructure/entities/clientes.entity"
import { PaymentEntity } from "../../modules/payments/infraestructure/entities/plazos.entity"
import { Prestamos } from "../../modules/loans/intraestructure/entities/prestamos.entity"
import { AmountEntity } from "../../modules/amounts/infraestructure/entities/montos.entity"
import { Amount } from "../../modules/amounts/domain/models/amounts"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "bankapp",
    synchronize: false,
    logging: true,
    entities: [
         ClientEntity,
         AmountEntity,
        // Plazos,
        // Prestamos,
        // Montos,
        join(__dirname, "/../../modules/**/*.entity.{js,ts}")
    ],
    subscribers: [],
    migrations: [],
})