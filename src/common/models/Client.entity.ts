import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { medicalAppointment } from './MedicalAppointment.entity';
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

  @Column()
  email!: string;

  @Column()
  health_insurance!: boolean;

  @OneToOne(() => medicalHistory)
  history!: medicalHistory;
}
