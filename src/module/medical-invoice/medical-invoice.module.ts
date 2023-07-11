import { Module } from '@nestjs/common';
import { MedicalInvoiceController } from './medical-invoice.controller';
import { MedicalInvoiceService } from './medical-invoice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { medicalInvoice } from 'src/common/models/entity/MedicalInvoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([medicalInvoice])],
  controllers: [MedicalInvoiceController],
  providers: [MedicalInvoiceService],
})
export class MedicalInvoiceModule {}
