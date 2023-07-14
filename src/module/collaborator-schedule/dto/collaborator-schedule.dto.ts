import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CollaboratorDto } from '../../collaborator/dto/Collaborator.dto';

export class collaboratorScheduleDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @Type(() => CollaboratorDto)
  collaborator!: CollaboratorDto;

  @IsNotEmpty()
  @IsDateString()
  start_date!: Date;

  @IsNotEmpty()
  @IsDateString()
  end_date!: Date;

  @IsNotEmpty()
  @IsBoolean()
  state!: boolean;
}
