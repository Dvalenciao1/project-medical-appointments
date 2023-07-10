import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from './Client.entity';
import { Colaborator } from './Colaborator.entity';
import { medicalSchedule } from './MedicalSchedule.entity';
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

  @OneToOne(() => Colaborator)
  @JoinColumn()
  colaborator!: Colaborator;

  @OneToOne(() => Client)
  @JoinColumn()
  client!: Client;

  @OneToOne(() => medicalInvoice)
  @JoinColumn({ name: 'invoice_id' })
  invoice!: medicalInvoice;
}
