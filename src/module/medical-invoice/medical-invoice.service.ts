import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { medicalInvoice } from 'src/common/models/entity/MedicalInvoice.entity';
import { Repository } from 'typeorm';
import { medicalInvoiceDto } from './dto/medical-invoice.dto';

@Injectable()
export class MedicalInvoiceService {
  constructor(
    @InjectRepository(medicalInvoice)
    private readonly medicalInvoiceRepository: Repository<medicalInvoice>,
  ) {}

  async findInvoices() {
    const invoices = await this.medicalInvoiceRepository.find();
    return invoices;
  }

  async createInvoices(invoice: medicalInvoiceDto) {
    const invoices = await this.medicalInvoiceRepository.find();
    return invoices;
  }
}
