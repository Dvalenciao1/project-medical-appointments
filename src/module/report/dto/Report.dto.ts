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
import { medicalSchedule } from 'src/common/models/MedicalSchedule.entity';
export class ReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @Type(() => medicalSchedule)
  schedule!: medicalSchedule;
}
