import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Client } from 'src/common/models/Client.entity';
import { Collaborator } from 'src/common/models/Collaborator.entity';
import { medicalInvoice } from 'src/common/models/MedicalInvoice.entity';
export class medicalAppointmentDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id!: number;

  @IsNotEmpty()
  @IsDateString()
  appointment_date!: Date;

  @IsNotEmpty()
  @IsString()
  appointment_location!: string;

  @IsNotEmpty()
  @IsBoolean()
  appointment_state!: boolean;

  @Type(() => Client)
  client!: Client;

  @Type(() => Collaborator)
  collaborator!: Collaborator;

  @Type(() => medicalInvoice)
  invoice!: medicalInvoice;
}
