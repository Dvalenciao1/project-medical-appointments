import { Test, TestingModule } from '@nestjs/testing';
import { MedicalScheduleController } from './medical-schedule.controller';

describe('MedicalScheduleController', () => {
  let controller: MedicalScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalScheduleController],
    }).compile();

    controller = module.get<MedicalScheduleController>(MedicalScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
