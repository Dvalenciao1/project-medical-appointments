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
  date_appointment!: Date;

  @Column()
  location_appointment!: string;

  @Column()
  state_appointment!: boolean;

  @OneToOne(() => Collaborator)
  @JoinColumn()
  collaborator!: Collaborator

  @OneToOne(() => Client, { cascade: true })
  @JoinColumn()
  client!: Client;

  @OneToOne(() => medicalInvoice)
  @JoinColumn({ name: 'invoice_id' })
  invoice!: medicalInvoice;
}
