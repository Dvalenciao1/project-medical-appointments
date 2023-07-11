import { Module } from '@nestjs/common';
import { MedicalAppointmentController } from './medical-appointment.controller';
import { MedicalAppointmentService } from './medical-appointment.service';
import { medicalAppointment } from 'src/common/models/entity/MedicalAppointment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([medicalAppointment])],
  controllers: [MedicalAppointmentController],
  providers: [MedicalAppointmentService],
})
export class MedicalAppointmentModule {}
