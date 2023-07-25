import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isString,
} from 'class-validator';
import { genders } from 'src/common/enums/client.enums';
export class ClientDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  second_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsString()
  second_surname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dni: string;

  @ApiProperty({ enum: genders })
  @IsNotEmpty()
  @IsEnum(genders)
  gender: genders;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  health_insurance: boolean;
}
export class CreateClientDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  second_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsString()
  second_surname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dni: string;

  @ApiProperty({ enum: genders })
  @IsNotEmpty()
  @IsEnum(genders)
  gender: genders;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birth_date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  health_insurance: boolean;
}
