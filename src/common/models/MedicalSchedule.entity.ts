import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { medicalAppointment } from './MedicalAppointment.entity';

@Entity()
export class medicalSchedule {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 300 })
  avalible_appointments?: string;

  @OneToOne(() => medicalAppointment)
  @JoinColumn()
  appointment!: medicalAppointment;
}
