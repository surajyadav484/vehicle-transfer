import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  vehicleNumber: string;

  @Column({
    nullable: false,
  })
  vehicleType: string;

  @Column({
    nullable: false,
  })
  pucCertificate: string;

  @Column({
    nullable: false,
  })
  insuranceCertificate: string;
}
