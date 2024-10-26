import { Module } from '@nestjs/common';
import { VehicleTransferHistoryService } from './vehicle-transfer-history.service';
import { VehicleTransferHistoryController } from './vehicle-transfer-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleTransferHistory } from './entities/vehicle-transfer-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleTransferHistory])],
  controllers: [VehicleTransferHistoryController],
  providers: [VehicleTransferHistoryService],
})
export class VehicleTransferHistoryModule {}
