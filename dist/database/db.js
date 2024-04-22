"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const clientes_entity_1 = require("../modules/clients/infraestructure/entities/clientes.entity");
const plazos_entity_1 = require("../modules/payments/infraestructure/entities/plazos.entity");
const prestamos_entity_1 = require("../modules/loans/intraestructure/entities/prestamos.entity");
const montos_entity_1 = require("../modules/amounts/infraestructure/entities/montos.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "bankapp",
    synchronize: false,
    logging: true,
    entities: [
        clientes_entity_1.ClientEntity,
        plazos_entity_1.Plazos,
        prestamos_entity_1.Prestamos,
        montos_entity_1.Montos,
        //join(__dirname, "/../../modules/**/*.entity.{js,ts}")
    ],
    subscribers: [],
    migrations: [],
});
