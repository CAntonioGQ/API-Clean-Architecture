"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingCredit = void 0;
const client_routes_1 = require("../routes/client.routes");
class RoutingCredit {
    run(server) {
        const clientRoutes = new client_routes_1.ClientRoutes();
        server.app.use('/clientes', clientRoutes.run());
    }
}
exports.RoutingCredit = RoutingCredit;
