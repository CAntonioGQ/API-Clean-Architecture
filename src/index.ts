import cors from 'cors';
import { ServerExpress } from './classes/server';
import express from 'express';
import path from 'path';
import { RoutingModule } from './config/middlewares/routing-module.middleware';
import { RoutingClient } from './modules/clients/infraestructure/rest/middlewares/routing-client.middleware';
import { AppDataSource } from './config/database/db';

const server = new ServerExpress();
server.app.use(cors());

// Configurar el directorio público
server.app.use(express.static(path.join(__dirname, 'public')));

// Configurar el middleware para parsear el body de las solicitudes
server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));

// Configurar las rutas de los clientes
const routingCredit = new RoutingClient();
routingCredit.run(server);

// Iniciar el servidor
 server.startServer(async () => {
    await AppDataSource.initialize() 
    
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});