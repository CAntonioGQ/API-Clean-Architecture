import cors from 'cors';
import { ServerExpress } from './classes/server';
import express from 'express';
import path from 'path';
import { RoutingModule } from './config/middlewares/routing-module.middleware';
import { RoutingClient } from './modules/clients/infraestructure/rest/middlewares/routing-client.middleware';
import { AppDataSource } from './config/database/db';
import { RoutingAmount } from './modules/amounts/infraestructure/rest/middlewares/routing-amount.middleware';

const server = new ServerExpress();
server.app.use(cors());
server.app.use(express.static(path.join(__dirname, 'public')));
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));


const routingCredit = new RoutingClient();
routingCredit.run(server);

const routingAmount = new RoutingAmount();
routingAmount.run(server);


 server.startServer(async () => {
    await AppDataSource.initialize() 
    
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});