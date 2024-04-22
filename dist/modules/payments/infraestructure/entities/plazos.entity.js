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
exports.Plazos = void 0;
const typeorm_1 = require("typeorm");
const prestamos_entity_1 = require("../../../loans/intraestructure/entities/prestamos.entity");
let Plazos = class Plazos {
};
exports.Plazos = Plazos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idPlazos', type: 'int' }),
    __metadata("design:type", Number)
], Plazos.prototype, "idPlazos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'plazos', type: 'varchar' }),
    __metadata("design:type", String)
], Plazos.prototype, "plazos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], Plazos.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'updatedAt', type: 'timestamp' }),
    __metadata("design:type", Date)
], Plazos.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => prestamos_entity_1.Prestamos, prestamo => prestamo.plazo),
    __metadata("design:type", prestamos_entity_1.Prestamos)
], Plazos.prototype, "prestamo", void 0);
exports.Plazos = Plazos = __decorate([
    (0, typeorm_1.Entity)()
], Plazos);