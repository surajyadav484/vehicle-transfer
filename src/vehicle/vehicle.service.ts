import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const { vehicleNumber } = createVehicleDto;
    const existingVehicle = await this.vehicleRepository.findOneBy({
      vehicleNumber,
    });
    if (existingVehicle) {
      throw new BadRequestException(
        `Vehicle with vehicle number:${vehicleNumber} already exists`,
      );
    }

    const result = await this.vehicleRepository.save(createVehicleDto);
    return result;
  }

  async getOne(id: string): Promise<Vehicle> {
    const found = await this.vehicleRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Vehicle with give id: ${id} does not exits`);
    }
    return found;
  }

  async getAll(): Promise<Vehicle[]> {
    const found = await this.vehicleRepository.find();
    return found;
  }
  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    await this.getOne(id);
    return this.vehicleRepository.update(id, updateVehicleDto);
  }
  async delete(id: string) {
    await this.getOne(id);
    return this.vehicleRepository.delete(id);
  }
}
