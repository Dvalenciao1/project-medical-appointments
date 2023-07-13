import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { medicalSchedule } from './MedicalSchedule.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  actual_date!: Date;

  @OneToOne(() => medicalSchedule)
  @JoinColumn({ name: 'schedule_id' })
  schedule!: medicalSchedule;
}
