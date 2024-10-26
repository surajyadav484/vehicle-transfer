import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleTransferHistoryService } from './vehicle-transfer-history.service';
import { CreateVehicleTransferHistoryDto } from './dto/create-vehicle-transfer-history.dto';
import { UpdateVehicleTransferHistoryDto } from './dto/update-vehicle-transfer-history.dto';

@Controller('vehicle-transfer-history')
export class VehicleTransferHistoryController {
  constructor(private readonly vehicleTransferHistoryService: VehicleTransferHistoryService) {}

  @Post()
  create(@Body() createVehicleTransferHistoryDto: CreateVehicleTransferHistoryDto) {
    return this.vehicleTransferHistoryService.create(createVehicleTransferHistoryDto);
  }

  @Get()
  findAll() {
    return this.vehicleTransferHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleTransferHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleTransferHistoryDto: UpdateVehicleTransferHistoryDto) {
    return this.vehicleTransferHistoryService.update(+id, updateVehicleTransferHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleTransferHistoryService.remove(+id);
  }
}
