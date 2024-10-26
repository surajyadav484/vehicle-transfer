import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleTransferHistoryInputDto } from './dto/create-vehicle-transfer-history-input.dto copy';
import { CreateVehicleTransferHistoryDto } from './dto/create-vehicle-transfer-history.dto';
import { VehicleTransferHistory } from './entities/vehicle-transfer-history.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Driver } from 'src/driver/entities/driver.entity';
import { TransferType } from './transfer-type.enum';

@Injectable()
export class VehicleTransferHistoryService {
  constructor(
    @InjectRepository(VehicleTransferHistory)
    private readonly vehicleTransferHistoryRepository: Repository<VehicleTransferHistory>,

    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,

    @InjectRepository(Driver)
    public readonly driverRepository: Repository<Driver>,
  ) {}

  async create(
    createVehicleTransferHistoryInputDto: CreateVehicleTransferHistoryInputDto,
  ): Promise<VehicleTransferHistory> {
    // Check if vehicle to be transferred exists
    const vehicle = await this.vehicleRepository.findOneBy({
      id: createVehicleTransferHistoryInputDto.vehicleId,
    });

    if (!vehicle) {
      throw new BadRequestException('Vehicle not found');
    }

    const { transferredToType, transferredToId } =
      createVehicleTransferHistoryInputDto;

    if (transferredToType === TransferType.DRIVER) {
      const driver = await this.driverRepository.findOneBy({
        id: transferredToId,
      });
      if (!driver) {
        throw new BadRequestException(
          `Driver with id: ${transferredToId} not found`,
        );
      }
    }

    let createVehicleTransferHistoryDto: CreateVehicleTransferHistoryDto;

    // Get existing vehicle transfer history
    const vehicleHistory =
      await this.vehicleTransferHistoryRepository.findOneBy({
        vehicleId: createVehicleTransferHistoryInputDto.vehicleId,
      });

    if (
      vehicleHistory &&
      vehicleHistory.transferredToId ===
        createVehicleTransferHistoryInputDto.transferredToId
    ) {
      throw new BadRequestException(
        `Vehicle has already been transferred to provided ${createVehicleTransferHistoryInputDto.transferredToType}`,
      );
    }

    createVehicleTransferHistoryDto = {
      ...createVehicleTransferHistoryInputDto,
      transferredFromId: vehicleHistory?.transferredToId,
      transferredFromType: vehicleHistory?.transferredToType,
    };

    return this.vehicleTransferHistoryRepository.save(
      createVehicleTransferHistoryDto,
    );
  }

  async getAll() {
    return this.vehicleTransferHistoryRepository.find();
  }

  async getOne(id: string): Promise<VehicleTransferHistory> {
    const found = await this.vehicleTransferHistoryRepository.findOneBy({ id });
    if (!found) {
      throw new BadRequestException(`Transfer with given id ${id} not found!`);
    }
    return found;
  }
}
