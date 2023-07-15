import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collaborator } from './Collaborator.entity';

@Entity()
export class collaboratorSchedule {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.id, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn()
  collaborator!: Collaborator;

  @Column({ type: 'date', nullable: false })
  start_date!: Date;

  @Column({ type: 'date', nullable: false })
  end_date!: Date;

  @Column({ type: 'boolean', nullable: false })
  state!: boolean;
}
