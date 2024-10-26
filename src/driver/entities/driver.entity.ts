import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Driver extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  phoneNumber: string;

  @Column()
  profilePhotUrl: string;
}
