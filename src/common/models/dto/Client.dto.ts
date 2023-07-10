import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
export class ClientDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id?: number;

  @IsNotEmpty()
  @IsString()
  first_name!: string;

  @IsNotEmpty()
  @IsString()
  second_name?: string;

  @IsNotEmpty()
  @IsString()
  surname!: string;

  @IsNotEmpty()
  @IsString()
  second_surname!: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  dni!: number;

  @IsNotEmpty()
  @IsString()
  gender!: string;

  @IsNotEmpty()
  @IsDate()
  birth_date!: Date;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  phone!: number;

  @IsNotEmpty()
  @IsString()
  address!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsBoolean()
  health_insurance!: boolean;
}
