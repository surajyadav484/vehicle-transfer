import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVehicleTransferHistoryDto } from './dto/create-vehicle-transfer-history.dto';
import { UpdateVehicleTransferHistoryDto } from './dto/update-vehicle-transfer-history.dto';
import { Repository } from 'typeorm';
import { VehicleTransferHistory } from './entities/vehicle-transfer-history.entity';
import { CreateVehicleTransferHistoryInputDto } from './dto/create-vehicle-transfer-history-input.dto copy';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VehicleTransferHistoryService {
  constructor(
    @InjectRepository(VehicleTransferHistory)
    private readonly vehicleTransferHistoryRepository: Repository<VehicleTransferHistory>,
  ) {}

  async create(
    createVehicleTransferHistoryInputDto: CreateVehicleTransferHistoryInputDto,
  ): Promise<VehicleTransferHistory> {
    let createVehicleTransferHistoryDto: CreateVehicleTransferHistoryDto;

    // Get existing vehicle transfer history
    const vehicleHistory =
      await this.vehicleTransferHistoryRepository.findOneBy({
        vehicleId: createVehicleTransferHistoryInputDto.vehicleId,
      });

    if (
      vehicleHistory.transferredToId ===
      createVehicleTransferHistoryInputDto.transferredToId
    ) {
      throw new BadRequestException(
        `Vehicle has already been transferred to provided ${createVehicleTransferHistoryInputDto.transferredToType}`,
      );
    }

    createVehicleTransferHistoryDto = {
      ...createVehicleTransferHistoryInputDto,
      transferredFromId: vehicleHistory?.transferredToId || '',
      transferredFromType: vehicleHistory?.transferredToType || '',
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
