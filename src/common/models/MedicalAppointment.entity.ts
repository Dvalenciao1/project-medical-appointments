import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Patient } from './Patient.entity';
import { Colaborator } from './Colaborator.entity';
import { medicalSchedule } from './MedicalSchedule.entity';

@Entity()
export class medicalAppointment {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Patient)
  @JoinColumn()
  id_patient?: Patient;

  @OneToOne(() => Colaborator)
  @JoinColumn()
  id_colaborator?: Colaborator;

  @OneToOne(() => medicalSchedule)
  @JoinColumn()
  id_agenda?: medicalSchedule;

  @Column()
  appointment_date?: Date;

  @Column()
  appointment_location?: string;

  @Column()
  state?: boolean;
}
