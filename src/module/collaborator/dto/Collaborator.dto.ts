import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isEmail,
} from 'class-validator';
import { collaboratorScheduleDto } from 'src/module/collaborator-schedule/dto/collaborator-schedule.dto';
export class CollaboratorDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @IsString()
  first_name!: string;

  @IsNotEmpty()
  @IsString()
  surname!: string;

  @IsNotEmpty()
  @IsString()
  rol!: string;

  @IsNotEmpty()
  @IsString()
  department!: string;

  @IsNotEmpty()
  @IsNumber()
  phone!: number;

  @IsNotEmpty()
  @IsEmail()
  email!: string;
  
  @Type(()=>collaboratorScheduleDto)
  schedul!: collaboratorScheduleDto[]
}
