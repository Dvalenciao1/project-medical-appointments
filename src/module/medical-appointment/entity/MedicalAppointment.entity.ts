import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Client } from '../../client/entity/Client.entity';
import { Collaborator } from '../../collaborator/entity/Collaborator.entity';

@Entity()
export class medicalAppointment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'datetime', nullable: false })
  appointment_date!: Date;

  @Column({ type: 'varchar', length: 230, nullable: false })
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
