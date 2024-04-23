import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientEntity } from "../../../clients/infraestructure/entities/clientes.entity"; 
import { AmountEntity } from "../../../amounts/infraestructure/entities/montos.entity";
import { PaymentEntity } from "../../../payments/infraestructure/entities/plazos.entity";

@Entity()
export class Prestamos {
  @PrimaryGeneratedColumn({name: 'id_rel', type: 'int'})
  idRel: number;

  @ManyToOne(() => ClientEntity, cliente => cliente.idClientes)
  @JoinColumn({ name: 'id_clientes' })
  id_clientes: ClientEntity;

  @ManyToOne(() => AmountEntity, monto => monto.idMontos)
  @JoinColumn({ name: 'id_montos' })
  id_montos: AmountEntity;

  @ManyToOne(() => PaymentEntity, plazo => plazo.idPlazos)
  @JoinColumn({ name: 'id_plazos' })
  id_plazos: PaymentEntity;

  @Column({name: 'createdAt', type: 'timestamp'})
  createdAt: Date;

  @Column({name: 'updatedAt', type: 'timestamp'})
  updatedAt: Date;
}