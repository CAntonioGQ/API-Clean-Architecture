"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
const typeorm_1 = require("typeorm");
const prestamos_entity_1 = require("../../../loans/intraestructure/entities/prestamos.entity");
let ClientEntity = class ClientEntity {
};
exports.ClientEntity = ClientEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idClientes', type: 'int' }),
    __metadata("design:type", Number)
], ClientEntity.prototype, "idClientes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombreCliente', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "nombreCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updatedAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], ClientEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestamos_entity_1.Prestamos, prestamo => prestamo.id_clientes),
    __metadata("design:type", Array)
], ClientEntity.prototype, "prestamos", void 0);
exports.ClientEntity = ClientEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'clientes' })
], ClientEntity);
