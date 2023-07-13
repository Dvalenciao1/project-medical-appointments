import {
  IsBoolean,
  IsEmail,
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

  @IsNotEmpty()
  @IsNumber()
  id_appointment: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  total_value: number;

  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
