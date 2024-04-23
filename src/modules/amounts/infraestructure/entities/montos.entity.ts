import { Column, PrimaryColumn, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";


@Entity({name: 'montos'})
export class AmountEntity {

    @PrimaryGeneratedColumn({name: 'idMontos', type: 'int'})
    idMontos: number;

    @Column({name: 'montos', type: 'int'})
    montos: number;

    @Column({name: 'createdAt', type: 'timestamp'})
    createdAt: Date;

    @Column({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date;
    
    @OneToOne(() => Prestamos, prestamo => prestamo.id_montos)
    prestamo: Prestamos[];
}
