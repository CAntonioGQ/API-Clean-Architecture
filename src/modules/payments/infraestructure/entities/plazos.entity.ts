import { Column, PrimaryColumn, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";


@Entity()
export class Plazos {

    @PrimaryGeneratedColumn({name: 'idPlazos', type: 'int'})
    idPlazos: number

    @Column({name: 'plazos', type: 'varchar'})
    plazos: string

    @CreateDateColumn({name: 'createdAt', type: 'timestamp'})
    createdAt: Date

    @CreateDateColumn({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date

    @OneToOne(() => Prestamos, prestamo => prestamo.plazo)
    prestamo: Prestamos;
}



