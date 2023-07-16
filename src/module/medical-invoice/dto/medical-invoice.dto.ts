import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
export class medicalInvoiceDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_appointment: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  total_value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string;
}
