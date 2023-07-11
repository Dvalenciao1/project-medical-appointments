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
export class medicalAppointmentDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  id_paciente: number;

  @IsNotEmpty()
  @IsEmail()
  id_colaborator: number;

  @IsNotEmpty()
  @IsDateString()
  appointment_date: Date;

  @IsNotEmpty()
  @IsString()
  appointment_location: string;

  @IsNotEmpty()
  @IsBoolean()
  appointment_state: boolean;
}
