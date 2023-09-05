import { Exclude, Expose } from 'class-transformer';

export class SerializedLoginAuth {
  @Expose()
  email: string;

  @Expose()
  token: string;

  @Exclude()
  password: string;
}
