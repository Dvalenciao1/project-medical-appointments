import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import errors from 'src/utils/errors';
import { MedicalAppointmentService } from './medical-appointment.service';
import { medicalAppointmentDto } from './dto/medical-appointment.dto';

@Controller('medical-appointment')
export class MedicalAppointmentController {
  constructor(private medicalAppointmentService: MedicalAppointmentService) {}
  @Get()
  async findInvoices() {
    return this.medicalAppointmentService.find();
  }

  @Post()
  async createInvoice(@Body() appointment: medicalAppointmentDto) {
    return this.medicalAppointmentService.create(appointment).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
  @Put()
  async updateInvoice(@Body() appointment: medicalAppointmentDto) {
    return this.medicalAppointmentService.update(appointment).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
  @Delete('/:id')
  async deleteInvoice(@Param('id') id: number) {
    return this.medicalAppointmentService.delete(id).catch((error) => {
      throw new HttpException(
        {
          message: errors[error.errno] || error.message,
          statusCode: error.errno || error.statusCode,
        },
        HttpStatus.BAD_REQUEST,
      );
    });
  }
}
