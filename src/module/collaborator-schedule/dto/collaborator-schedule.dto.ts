import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class collaboratorScheduleDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @IsNumber()
  collaborator!: number;

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
