import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDriverDto } from './dto/login-driver.dto';

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

  async login(loginDriverDto: LoginDriverDto) {
    const { phoneNumber } = loginDriverDto;
    const user = await this.driverRepository.findOneBy({
      phoneNumber,
    });
    if (!user) {
      throw new BadRequestException(
        'Mobile number is not registered. Please register',
      );
    }

    // Generate OTP and send it to client. Allow the user to enter the otp and verify it. Create a new route for verifying the user.
    // If user is verified and redirect to home page.
    return 'Logged in successfully';
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
