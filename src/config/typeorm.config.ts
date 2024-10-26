import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';

export const typeOrmDbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: `vehicle-transfer`,
  entities: [Vehicle],
  logging: true,
  synchronize: true,
};
