import { Expose } from 'class-transformer';
import { genders } from '../enums/client.enums';

export class ClientSerializer {
  @Expose()
  id: number;

  @Expose()
  first_name: string;

  @Expose()
  second_name: string;

  @Expose()
  surname: string;

  @Expose()
  second_surname: string;

  @Expose()
  dni: string;

  @Expose()
  gender: genders;

  @Expose()
  birth_date: Date;

  @Expose()
  phone: string;

  @Expose()
  address: string;

  @Expose()
  email: string;

  @Expose()
  health_insurance: boolean;
}
