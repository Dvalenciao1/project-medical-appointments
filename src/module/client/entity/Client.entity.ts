import { Collaborator } from 'src/module/collaborator/entity/Collaborator.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@Unique('Email', ['email'])
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  fullname!: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  dni!: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  gender!: string;

  @Column({ type: 'date', nullable: true })
  birth_date!: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
  phone!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  address!: string;

  @Column({ type: 'varchar', nullable: false })
  email!: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'boolean', nullable: true })
  health_insurance!: boolean;

  @OneToOne(() => Collaborator, { eager: true })
  @JoinColumn({ name: 'collaborator_id' })
  collaborator: Collaborator;
}
