import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleTransferHistoryDto } from './create-vehicle-transfer-history.dto';

export class UpdateVehicleTransferHistoryDto extends PartialType(CreateVehicleTransferHistoryDto) {}
