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
  id_appointment: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  total_value: number;

  @IsNotEmpty()
  @IsBoolean()
  : boolean;
  
  @IsNotEmpty()
  @IsBoolean()
  appointment_state: boolean;
}
