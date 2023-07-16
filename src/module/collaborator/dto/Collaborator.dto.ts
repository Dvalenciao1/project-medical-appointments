import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { collaboratorSchedule } from 'src/common/models/CollaboratorSchedule.entity';
import { collaboratorScheduleDto } from 'src/module/collaborator-schedule/dto/collaborator-schedule.dto';
export class CollaboratorDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  first_name!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surname!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  rol!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  department!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  phone!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsArray()
  @Type(() => collaboratorSchedule)
  schedule!: collaboratorSchedule[];
}
