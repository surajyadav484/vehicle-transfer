import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vehicleService.getOne(id);
  }

  @Get()
  getAll() {
    return this.vehicleService.getAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehicleService.delete(id);
  }
}
