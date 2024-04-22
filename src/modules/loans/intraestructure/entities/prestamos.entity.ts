import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, CreateDateColumn } from "typeorm";
import { ClientEntity } from "../../../clients/infraestructure/entities/clientes.entity";
import { Montos } from "../../../amounts/infraestructure/entities/montos.entity";
import { Plazos } from "../../../payments/infraestructure/entities/plazos.entity";

@Entity()
export class Prestamos {

    @PrimaryGeneratedColumn({name: 'id_rel', type: 'int'})
    idRel: number

    @ManyToOne(() => ClientEntity, cliente => cliente.idClientes)
    cliente: ClientEntity;

    @ManyToOne(() => Montos, monto => monto.idMontos)
    monto: Montos;

    @ManyToOne(() => Plazos, plazo => plazo.idPlazos)
    plazo: Plazos;

    @CreateDateColumn({name: 'createdAt', type: 'timestamp'})
    createdAt: Date

    @CreateDateColumn({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date
}
