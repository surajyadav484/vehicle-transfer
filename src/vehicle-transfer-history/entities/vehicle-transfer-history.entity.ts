import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VehicleTransferHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vehicleId: string;

  @Column()
  transferredFromId: string;

  @Column({ nullable: false })
  transferredToId: string;

  @Column()
  transferredFromType: string; //It can be driver or any other entity which vehicle can be transferred from.

  @Column({ nullable: false })
  transferredToType: string; //It can be driver or any other entity which vehicle can be transferred from.

  @Column({
    nullable: false,
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  transferredOn: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  vehicle: Vehicle;

  // Note: Not created relation for transferredFrom and transferredTo ids, because in future a vehicle can be transferred to other entities as well.
}
