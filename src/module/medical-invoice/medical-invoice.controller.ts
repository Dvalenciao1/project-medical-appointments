import { Body, Controller, Get, Post } from '@nestjs/common';
import { MedicalInvoiceService } from './medical-invoice.service';
import { medicalInvoiceDto } from './dto/medical-invoice.dto';

@Controller('medical-invoice')
export class MedicalInvoiceController {
  constructor(private medicalInvoiceService: MedicalInvoiceService) {}
  @Get()
  async getInvoices() {
    return this.medicalInvoiceService.findInvoices();
  }

  @Post()
  async createInvoice(@Body() invoice: medicalInvoiceDto) {
    return this.medicalInvoiceService.createInvoices(invoice);
  }
}
