import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmDbConfig } from './config/typeorm.config';

@Module({
  imports: [VehicleModule, TypeOrmModule.forRoot(typeOrmDbConfig)],
})
export class AppModule {}
