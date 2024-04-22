import { Column, PrimaryColumn, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";


@Entity()
export class Montos {

    @PrimaryGeneratedColumn({name: 'idMontos', type: 'int'})
    idMontos: number

    @Column({name: 'montos', type: 'int'})
    montos: number

    @CreateDateColumn({name: 'createdAt', type: 'timestamp'})
    createdAt: Date

    @CreateDateColumn({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date
    
    @OneToOne(() => Prestamos, prestamo => prestamo.monto)
    prestamo: Prestamos;
}
