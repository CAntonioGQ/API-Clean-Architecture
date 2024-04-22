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
exports.Montos = void 0;
const typeorm_1 = require("typeorm");
let Montos = class Montos {
};
exports.Montos = Montos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_rel', type: 'int' }),
    __metadata("design:type", Number)
], Montos.prototype, "idRel", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_clientes', type: 'int' }),
    __metadata("design:type", Number)
], Montos.prototype, "idClientes", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_montos', type: 'int' }),
    __metadata("design:type", Number)
], Montos.prototype, "idMontos", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_plazos', type: 'int' }),
    __metadata("design:type", Number)
], Montos.prototype, "idPlazos", void 0);
exports.Montos = Montos = __decorate([
    (0, typeorm_1.Entity)()
], Montos);
