import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { LoginDriverDto } from './dto/login-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Post('login')
  login(@Body() loginDriverDto: LoginDriverDto) {
    return this.driverService.login(loginDriverDto);
  }

  @Get()
  getAll() {
    return this.driverService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.driverService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(id, updateDriverDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.driverService.delete(id);
  }
}
