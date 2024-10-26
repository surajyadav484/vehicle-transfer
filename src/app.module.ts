import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmDbConfig } from './config/typeorm.config';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [VehicleModule, TypeOrmModule.forRoot(typeOrmDbConfig), DriverModule],
})
export class AppModule {}
