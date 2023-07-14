import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollaboratorScheduleService } from './collaborator-schedule.service';
import { collaboratorSchedule } from 'src/common/models/CollaboratorSchedule.entity';
import { collaboratorScheduleDto } from './dto/collaborator-schedule.dto';

@Controller('collaborator-schedule')
export class CollaboratorScheduleController {
  constructor(private scheduleService: CollaboratorScheduleService) {}

  @Get()
  async findSchedule(): Promise<collaboratorSchedule[]> {
    const schedule = this.scheduleService.findAll();
    return schedule;
  }

  @Post()
  async createSchedule(@Body() collaboratorSchedule: collaboratorScheduleDto) {
    const schedule = this.scheduleService.create(collaboratorSchedule);
  }
}
