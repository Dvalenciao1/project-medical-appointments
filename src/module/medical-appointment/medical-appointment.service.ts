import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalAppointment } from 'src/common/models/entity/MedicalAppointment.entity';
import { Repository } from 'typeorm';
import { medicalAppointmentDto } from './dto/medical-appointment.dto';

@Injectable()
export class MedicalAppointmentService {
  constructor(
    @InjectRepository(medicalAppointment)
    private readonly appointmentRepository: Repository<medicalAppointment>,
  ) {}

  async findAppointment() {
    return this.appointmentRepository.find()
  }
}
