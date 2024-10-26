import { Module } from '@nestjs/common';
import { VehicleTransferHistoryService } from './vehicle-transfer-history.service';
import { VehicleTransferHistoryController } from './vehicle-transfer-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleTransferHistory } from './entities/vehicle-transfer-history.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Driver } from 'src/driver/entities/driver.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VehicleTransferHistory, Vehicle, Driver]),
  ],
  controllers: [VehicleTransferHistoryController],
  providers: [VehicleTransferHistoryService],
})
export class VehicleTransferHistoryModule {}
