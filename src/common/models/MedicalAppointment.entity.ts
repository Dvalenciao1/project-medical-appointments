import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
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

  @OneToOne(() => Collaborator, { cascade: true, eager: true })
  @JoinColumn()
  collaborator!: Collaborator;

  @OneToOne(() => Client, { cascade: true, eager: true })
  @JoinColumn()
  client!: Client;

  @OneToOne(() => medicalInvoice, { cascade: true, eager: true })
  @JoinColumn()
  invoice!: medicalInvoice;
}
