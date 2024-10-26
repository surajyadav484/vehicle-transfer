import { IsEnum } from 'class-validator';
import { CreateVehicleTransferHistoryInputDto } from './create-vehicle-transfer-history-input.dto copy';
import { TransferType } from '../enums/type-enum';

export class CreateVehicleTransferHistoryDto extends CreateVehicleTransferHistoryInputDto {
  transferredFromId: string;

  @IsEnum(TransferType, { message: 'Invalid transfer type' })
  transferredFromType: TransferType;
}
