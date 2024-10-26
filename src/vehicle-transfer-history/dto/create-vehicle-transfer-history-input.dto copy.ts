import { IsEnum } from 'class-validator';
import { TransferType } from '../transfer-type.enum';

export class CreateVehicleTransferHistoryInputDto {
  vehicleId: string;

  transferredToId: string;

  @IsEnum(TransferType, {
    message: 'Invalid Transfer type',
  })
  transferredToType: TransferType;
}
