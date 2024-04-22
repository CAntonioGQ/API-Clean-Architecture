import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Prestamos } from "../../../loans/intraestructure/entities/prestamos.entity";

@Entity({name: 'clientes'})
export class ClientEntity {
  @PrimaryGeneratedColumn({name: 'idClientes', type: 'int'})
  idClientes: number;

  @Column({name: 'nombreCliente', type: 'varchar', length: 255})
  nombreCliente: string;

  @Column({name: 'createdAt', type: 'timestamp'})
  createdAt: Date;

  @Column({name: 'updatedAt', type: 'timestamp'})
  updatedAt: Date;

  @OneToMany(() => Prestamos, prestamo => prestamo.id_clientes)
  prestamos: Prestamos[];
}