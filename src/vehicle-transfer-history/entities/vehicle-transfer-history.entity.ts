import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VehicleTransferHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vehicleId: string;

  @Column({ nullable: false })
  transferredFromId: string;

  @Column({ nullable: false })
  transferredToId: string;

  @Column({ nullable: false })
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
}
