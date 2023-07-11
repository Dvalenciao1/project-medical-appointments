import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
export class medicalAppointmentDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  id_pacient: number;

  @IsNotEmpty()
  @IsNumber()
  id_colaborator: number;

  @IsNotEmpty()
  @IsDateString()
  appointment_date: Date;

  @IsNotEmpty()
  @IsString()
  appointment_location: string;

  @IsNotEmpty()
  @IsBoolean()
  appointment_status: boolean;
}
