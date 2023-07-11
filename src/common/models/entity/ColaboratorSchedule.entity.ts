import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Colaborator } from './Colaborator.entity';

@Entity()
export class colaboratorSchedule {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Colaborator, (colaborator) => colaborator.id)
  colaborator!: Colaborator;

  @Column()
  start_date!: Date;

  @Column()
  end_date!: Date;

  @Column()
  state!: boolean;
}
