import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVehicleTransferHistoryInputDto } from './dto/create-vehicle-transfer-history-input.dto copy';
import { VehicleTransferHistoryService } from './vehicle-transfer-history.service';

@Controller('vehicle-transfer-history')
export class VehicleTransferHistoryController {
  constructor(
    private readonly vehicleTransferHistoryService: VehicleTransferHistoryService,
  ) {}

  @Post()
  create(
    @Body()
    createVehicleTransferHistoryInputDto: CreateVehicleTransferHistoryInputDto,
  ) {
    return this.vehicleTransferHistoryService.create(
      createVehicleTransferHistoryInputDto,
    );
  }

  @Get()
  getAll() {
    return this.vehicleTransferHistoryService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vehicleTransferHistoryService.getOne(id);
  }
}
