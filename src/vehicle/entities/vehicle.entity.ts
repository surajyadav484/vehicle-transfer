import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false,
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
