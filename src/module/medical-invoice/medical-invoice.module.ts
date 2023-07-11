import { Module } from '@nestjs/common';
import { MedicalInvoiceController } from './medical-invoice.controller';
import { MedicalInvoiceService } from './medical-invoice.service';

@Module({
  controllers: [MedicalInvoiceController],
  providers: [MedicalInvoiceService]
})
export class MedicalInvoiceModule {}
