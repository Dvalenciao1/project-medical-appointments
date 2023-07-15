import { Module } from '@nestjs/common';
import { CollaboratorScheduleController } from './collaborator-schedule.controller';
import { CollaboratorScheduleService } from './collaborator-schedule.service';
import { collaboratorSchedule } from 'src/common/models/CollaboratorSchedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([collaboratorSchedule])],
  controllers: [CollaboratorScheduleController],
  providers: [CollaboratorScheduleService],
})
export class CollaboratorScheduleModule {}
