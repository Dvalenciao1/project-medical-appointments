import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalAppointment } from 'src/common/models/MedicalAppointment.entity';
import { Repository } from 'typeorm';
import { medicalAppointmentDto } from './dto/medical-appointment.dto';

@Injectable()
export class MedicalAppointmentService {
  constructor(
    @InjectRepository(medicalAppointment)
    private readonly medicalAppointmentRepository: Repository<medicalAppointment>,
  ) {}

  async find(): Promise<medicalAppointment[]> {
    const invoices = await this.medicalAppointmentRepository.find();
    return invoices;
  }

  async create(appointment: medicalAppointmentDto): Promise<medicalAppointment> {
    const data = await this.medicalAppointmentRepository.save(appointment);
    return data;
  }
  async update(appointment: medicalAppointmentDto): Promise<medicalAppointment> {
    const data = await this.medicalAppointmentRepository.save(appointment);
    return data;
  }

  async delete(id: number) {
    const invoices = await this.medicalAppointmentRepository.delete({ id });
    return invoices;
  }
}
