import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { medicalHistory } from './MedicalHistory.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  first_name!: string;

  @Column()
  second_name?: string;

  @Column()
  surname!: string;

  @Column()
  second_surname!: string;

  @Column()
  dni!: number;

  @Column()
  gender!: string;

  @Column()
  birth_date!: Date;

  @Column()
  phone!: number;

  @Column()
  address!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  health_insurance!: boolean;
}
