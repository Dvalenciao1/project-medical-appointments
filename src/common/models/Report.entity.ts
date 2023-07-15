import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { medicalSchedule } from './MedicalSchedule.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => medicalSchedule)
  @JoinColumn()
  schedule!: medicalSchedule;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;
}
