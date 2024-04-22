import { DataSource } from "typeorm"
import { join } from "path"
import { ClientEntity } from "../../modules/clients/infraestructure/entities/clientes.entity"
import { Plazos } from "../../modules/payments/infraestructure/entities/plazos.entity"
import { Prestamos } from "../../modules/loans/intraestructure/entities/prestamos.entity"
import { Montos } from "../../modules/amounts/infraestructure/entities/montos.entity"

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
        Plazos,
        Prestamos,
        Montos,
        //join(__dirname, "/../../modules/**/*.entity.{js,ts}")
    ],
    subscribers: [],
    migrations: [],
})