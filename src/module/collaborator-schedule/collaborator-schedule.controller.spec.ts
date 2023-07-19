import { Test, TestingModule } from '@nestjs/testing';
import { CollaboratorScheduleController } from './collaborator-schedule.controller';

describe('CollaboratorScheduleController', () => {
  let controller: CollaboratorScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollaboratorScheduleController],
    }).compile();

    controller = module.get<CollaboratorScheduleController>(CollaboratorScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
