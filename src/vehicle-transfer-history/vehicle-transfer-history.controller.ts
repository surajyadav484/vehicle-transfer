import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVehicleTransferHistoryInputDto } from './dto/create-vehicle-transfer-history-input.dto copy';
import { UpdateVehicleTransferHistoryDto } from './dto/update-vehicle-transfer-history.dto';
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
  findAll() {
    return this.vehicleTransferHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleTransferHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleTransferHistoryDto: UpdateVehicleTransferHistoryDto,
  ) {
    return this.vehicleTransferHistoryService.update(
      +id,
      updateVehicleTransferHistoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleTransferHistoryService.remove(+id);
  }
}
