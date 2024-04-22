import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientEntity } from "../../../clients/infraestructure/entities/clientes.entity"; 
import { Montos } from "../../../amounts/infraestructure/entities/montos.entity";
import { Plazos } from "../../../payments/infraestructure/entities/plazos.entity";

@Entity()
export class Prestamos {
  @PrimaryGeneratedColumn({name: 'id_rel', type: 'int'})
  idRel: number;

  @ManyToOne(() => ClientEntity, cliente => cliente.idClientes)
  @JoinColumn({ name: 'id_clientes' })
  id_clientes: ClientEntity;

  @ManyToOne(() => Montos, monto => monto.idMontos)
  @JoinColumn({ name: 'id_montos' })
  monto: Montos;

  @ManyToOne(() => Plazos, plazo => plazo.idPlazos)
  @JoinColumn({ name: 'id_plazos' })
  plazo: Plazos;

  @Column({name: 'createdAt', type: 'timestamp'})
  createdAt: Date;

  @Column({name: 'updatedAt', type: 'timestamp'})
  updatedAt: Date;
}