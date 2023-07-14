import { Test, TestingModule } from '@nestjs/testing';
import { CollaboratorScheduleService } from './collaborator-schedule.service';

describe('CollaboratorScheduleService', () => {
  let service: CollaboratorScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollaboratorScheduleService],
    }).compile();

    service = module.get<CollaboratorScheduleService>(CollaboratorScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
