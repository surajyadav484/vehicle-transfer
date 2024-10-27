import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { UploadFileDto } from './dto/upload-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private cloudinaryService: CloudinaryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() uploadFileDto: UploadFileDto) {
    return this.cloudinaryService.uploadFile(uploadFileDto);
  }
}
