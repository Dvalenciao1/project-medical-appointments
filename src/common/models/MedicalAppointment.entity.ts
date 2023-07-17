import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from './Client.entity';
import { Collaborator } from './Collaborator.entity';
import { medicalInvoice } from './MedicalInvoice.entity';

@Entity()
export class medicalAppointment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  appointment_date!: Date;

  @Column()
  appointment_location!: string;

  @Column()
  appointment_state!: boolean;

  @ManyToOne(() => Collaborator, { cascade: true, eager: true })
  @JoinColumn()
  collaborator!: Collaborator;

  @ManyToOne(() => Client, { cascade: true, eager: true })
  @JoinColumn()
  client!: Client;
}
