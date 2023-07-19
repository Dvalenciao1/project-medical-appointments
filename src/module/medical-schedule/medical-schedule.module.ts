import { Module } from '@nestjs/common';
import { MedicalScheduleController } from './medical-schedule.controller';
import { MedicalScheduleService } from './medical-schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { medicalSchedule } from 'src/common/models/MedicalSchedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([medicalSchedule])],
  controllers: [MedicalScheduleController],
  providers: [MedicalScheduleService],
})
export class MedicalScheduleModule {}
