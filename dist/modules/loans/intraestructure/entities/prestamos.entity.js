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
exports.Prestamos = void 0;
const typeorm_1 = require("typeorm");
const clientes_entity_1 = require("../../../clients/infraestructure/entities/clientes.entity");
const montos_entity_1 = require("../../../amounts/infraestructure/entities/montos.entity");
const plazos_entity_1 = require("../../../payments/infraestructure/entities/plazos.entity");
let Prestamos = class Prestamos {
};
exports.Prestamos = Prestamos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rel', type: 'int' }),
    __metadata("design:type", Number)
], Prestamos.prototype, "idRel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clientes_entity_1.ClientEntity, cliente => cliente.idClientes),
    (0, typeorm_1.JoinColumn)({ name: 'id_clientes' }),
    __metadata("design:type", clientes_entity_1.ClientEntity)
], Prestamos.prototype, "id_clientes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => montos_entity_1.Montos, monto => monto.idMontos),
    (0, typeorm_1.JoinColumn)({ name: 'id_montos' }),
    __metadata("design:type", montos_entity_1.Montos)
], Prestamos.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => plazos_entity_1.Plazos, plazo => plazo.idPlazos),
    (0, typeorm_1.JoinColumn)({ name: 'id_plazos' }),
    __metadata("design:type", plazos_entity_1.Plazos)
], Prestamos.prototype, "plazo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'createdAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], Prestamos.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updatedAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], Prestamos.prototype, "updatedAt", void 0);
exports.Prestamos = Prestamos = __decorate([
    (0, typeorm_1.Entity)()
], Prestamos);
