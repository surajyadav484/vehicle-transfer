import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmDbConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: `vehicle-transfer`,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: true,
};
