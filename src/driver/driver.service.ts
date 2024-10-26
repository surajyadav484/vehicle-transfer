import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}

  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    const { phoneNumber } = createDriverDto;
    const existingDriver = await this.driverRepository.findOneBy({
      phoneNumber,
    });
    if (existingDriver) {
      throw new BadRequestException(
        'Mobile number has already been registered. Please try to login',
      );
    }
    return this.driverRepository.save(createDriverDto);
  }

  findAll() {
    return `This action returns all driver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }

  update(id: number, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
