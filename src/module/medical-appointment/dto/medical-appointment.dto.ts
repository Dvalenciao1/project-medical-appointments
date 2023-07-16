import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ClientDto } from 'src/module/client/dto/Client.dto';
import { CollaboratorDto } from 'src/module/collaborator/dto/Collaborator.dto';
import { medicalInvoiceDto } from 'src/module/medical-invoice/dto/medical-invoice.dto';
export class medicalAppointmentDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  appointment_date!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  appointment_location!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  appointment_state!: boolean;

  @ApiProperty()
  @Type(() => ClientDto)
  client!: ClientDto;

  @ApiProperty()
  @Type(() => CollaboratorDto)
  collaborator!: CollaboratorDto;

  @ApiProperty()
  @Type(() => medicalInvoiceDto)
  invoice!: medicalInvoiceDto;
}
