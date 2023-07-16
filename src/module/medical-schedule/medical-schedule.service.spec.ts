import { Test, TestingModule } from '@nestjs/testing';
import { MedicalScheduleService } from './medical-schedule.service';

describe('MedicalScheduleService', () => {
  let service: MedicalScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalScheduleService],
    }).compile();

    service = module.get<MedicalScheduleService>(MedicalScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
