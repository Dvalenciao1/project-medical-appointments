import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from './Client.entity';

@Entity()
export class medicalHistory {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  family_history!: string;

  @Column()
  habits!: string;

  @Column()
  previous_medication!: string;

  @Column()
  current_medication!: string;

  @Column()
  allergies!: string;

  @OneToOne(() => Client, (client) => client.id, { cascade: true })
  @JoinColumn({ name: 'client_id' })
  client!: Client;
}
