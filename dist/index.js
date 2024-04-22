"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const server_1 = require("./classes/server");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routing_credit_middleware_1 = require("./modules/clients/infraestructure/rest/middlewares/routing-credit.middleware");
const server = new server_1.ServerExpress();
server.app.use((0, cors_1.default)());
// Configurar el directorio público
server.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Configurar el middleware para parsear el body de las solicitudes
server.app.use(express_1.default.json());
server.app.use(express_1.default.urlencoded({ extended: true }));
// Configurar las rutas de los clientes
const routingCredit = new routing_credit_middleware_1.RoutingClient();
routingCredit.run(server);
// Iniciar el servidor
server.startServer(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
