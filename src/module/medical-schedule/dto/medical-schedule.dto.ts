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
import { medicalAppointment } from 'src/common/models/MedicalAppointment.entity';

export class medicalScheduleDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNumber()
  @IsNotEmpty()
  avalible_appointments!: number;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @Type(() => medicalAppointment)
  appointment!: medicalAppointment;
}
