import { CreateVehicleTransferHistoryInputDto } from './create-vehicle-transfer-history-input.dto copy';

export class CreateVehicleTransferHistoryDto extends CreateVehicleTransferHistoryInputDto {
  transferredFromId: string;
  transferredFromType: string;
}
