import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isEmail,
} from 'class-validator';
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
}
