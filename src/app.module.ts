import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmDbConfig } from './config/typeorm.config';
import { DriverModule } from './driver/driver.module';
import { VehicleTransferHistoryModule } from './vehicle-transfer-history/vehicle-transfer-history.module';

@Module({
  imports: [
    VehicleModule,
    DriverModule,
    TypeOrmModule.forRoot(typeOrmDbConfig),
    VehicleTransferHistoryModule,
  ],
})
export class AppModule {}
