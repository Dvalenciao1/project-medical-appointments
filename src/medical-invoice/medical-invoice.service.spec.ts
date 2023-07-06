import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInvoiceService } from './medical-invoice.service';

describe('MedicalInvoiceService', () => {
  let service: MedicalInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalInvoiceService],
    }).compile();

    service = module.get<MedicalInvoiceService>(MedicalInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
