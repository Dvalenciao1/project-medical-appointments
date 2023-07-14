import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { collaboratorSchedule } from 'src/common/models/CollaboratorSchedule.entity';
import { Repository } from 'typeorm';
import { collaboratorScheduleDto } from './dto/collaborator-schedule.dto';

@Injectable()
export class CollaboratorScheduleService {
  constructor(
    @InjectRepository(collaboratorSchedule)
    private readonly collaboratorScheduleRepository: Repository<collaboratorSchedule>,
  ) {}

  async findAll(): Promise<collaboratorSchedule[]> {
    const schedule = await this.collaboratorScheduleRepository.find();
    return schedule;
  }

  async create(collaboratorSchedule: collaboratorScheduleDto) {
    console.log(collaboratorSchedule);
    const schedules = await this.collaboratorScheduleRepository.save(
      collaboratorSchedule
    );
    return schedules;
  }
}