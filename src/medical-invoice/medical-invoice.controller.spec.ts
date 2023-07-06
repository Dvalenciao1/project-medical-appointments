import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInvoiceController } from './medical-invoice.controller';

describe('MedicalInvoiceController', () => {
  let controller: MedicalInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalInvoiceController],
    }).compile();

    controller = module.get<MedicalInvoiceController>(MedicalInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
