import { Injectable } from '@nestjs/common';
import { CreateVehicleTransferHistoryDto } from './dto/create-vehicle-transfer-history.dto';
import { UpdateVehicleTransferHistoryDto } from './dto/update-vehicle-transfer-history.dto';

@Injectable()
export class VehicleTransferHistoryService {
  create(createVehicleTransferHistoryDto: CreateVehicleTransferHistoryDto) {
    return 'This action adds a new vehicleTransferHistory';
  }

  findAll() {
    return `This action returns all vehicleTransferHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleTransferHistory`;
  }

  update(id: number, updateVehicleTransferHistoryDto: UpdateVehicleTransferHistoryDto) {
    return `This action updates a #${id} vehicleTransferHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleTransferHistory`;
  }
}
