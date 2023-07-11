import { Controller, Get } from '@nestjs/common';
import { MedicalAppointmentService } from './medical-appointment.service';

@Controller('medical-appointment')
export class MedicalAppointmentController {
  constructor(private appointmentService: MedicalAppointmentService) {}

  @Get()
  async getAppointments() {
    return await this.appointmentService.findAppointment();
  }
}
