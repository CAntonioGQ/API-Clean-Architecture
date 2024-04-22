import { Column, PrimaryColumn, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";


@Entity({name: 'clientes'})
export class ClientEntity {

    @PrimaryGeneratedColumn({name: 'idClientes', type: 'int'})
    idClientes: number

    @Column({name: 'nombreCliente', type: 'varchar'})
    nombreCliente: string

    @CreateDateColumn({name: 'createdAt', type: 'timestamp'})
    createdAt: Date

    @CreateDateColumn({name: 'updatedAt', type: 'timestamp'})
    updatedAt: Date
    
    @OneToOne(() => Prestamos, prestamo => prestamo.cliente)
    prestamo: Prestamos;
}
