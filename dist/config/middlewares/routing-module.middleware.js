"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingModules = exports.RoutingModule = void 0;
const routing_credit_middleware_1 = require("../../modules/clients/infraestructure/rest/middlewares/routing-credit.middleware");
class RoutingModule {
    run(server) {
        const routingClient = new routing_credit_middleware_1.RoutingClient();
        server.app.use(routingClient.run(server));
        return (req, response, next) => {
            next();
        };
    }
}
exports.RoutingModule = RoutingModule;
const routingModules = (server) => {
    const routingClient = new routing_credit_middleware_1.RoutingClient();
    server.app.use(routingClient.run(server));
    return (req, response, next) => {
        next();
    };
};
exports.routingModules = routingModules;
