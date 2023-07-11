import { Controller, Get } from '@nestjs/common';
import { MedicalInvoiceService } from './medical-invoice.service';

@Controller('medical-invoice')
export class MedicalInvoiceController {
  constructor(private medicalInvoiceService: MedicalInvoiceService) {}
  @Get()
  async getInvoices() {
    return this.medicalInvoiceService.findInvoices();
  }
}
