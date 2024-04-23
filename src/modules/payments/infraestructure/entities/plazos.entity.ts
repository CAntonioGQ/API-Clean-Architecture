import { Column, PrimaryColumn, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";


@Entity({name: 'plazos'})
export class PaymentEntity {

    @PrimaryGeneratedColumn({name: 'idPlazos', type: 'int'})
    idPlazos: number

    @Column({name: 'plazos', type: 'int'})
    plazos: number

    @CreateDateColumn({name: 'createdAt', type: 'timestamp'})
    createdAt: Date

    @CreateDateColumn({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date

    @OneToOne(() => Prestamos, prestamo => prestamo.id_plazos)
    prestamo: Prestamos;
}



