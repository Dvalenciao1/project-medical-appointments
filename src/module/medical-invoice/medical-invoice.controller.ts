import { Controller, Get } from '@nestjs/common';

@Controller('medical-invoice')
export class MedicalInvoiceController {
  @Get()
  find(): string {
    return 'Hola mundo';
  }
}
