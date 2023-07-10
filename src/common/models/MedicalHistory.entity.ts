import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
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

  @OneToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
  client!: Client;
}
