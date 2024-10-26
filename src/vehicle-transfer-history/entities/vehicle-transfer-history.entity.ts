import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransferType } from '../transfer-type.enum';

@Entity()
export class VehicleTransferHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vehicleId: string;

  @Column({ nullable: true })
  transferredFromId: string;

  @Column({ nullable: false })
  transferredToId: string;

  @Column({
    // type: 'enum',
    nullable: false,
    enum: TransferType,
    default: TransferType.UNASSIGNED,
  })
  transferredFromType: TransferType; //It can be driver or any other entity which vehicle can be transferred from.

  @Column({ nullable: false, enum: TransferType })
  transferredToType: TransferType; //It can be driver or any other entity which vehicle can be transferred from.

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
