import { IsEnum } from 'class-validator';
import { TransferType } from '../enums/type-enum';

export class CreateVehicleTransferHistoryInputDto {
  vehicleId: string;

  transferredToId: string;

  @IsEnum(TransferType, { message: 'Invalid transfer type' })
  transferredToType: TransferType;
}
