import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { medicalAppointment } from './MedicalAppointment.entity';

@Entity()
export class medicalInvoice {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 500 })
  description!: string;

  @Column()
  total_value!: number;

  @Column()
  payment_method!: string;

  @Column()
  type!: string;

  @OneToOne(() => medicalAppointment)
  @JoinColumn()
  appointment!: medicalAppointment;
}
