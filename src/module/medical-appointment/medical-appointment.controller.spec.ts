import { Test, TestingModule } from '@nestjs/testing';
import { MedicalAppointmentController } from './medical-appointment.controller';

describe('MedicalAppointmentController', () => {
  let controller: MedicalAppointmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalAppointmentController],
    }).compile();

    controller = module.get<MedicalAppointmentController>(MedicalAppointmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
