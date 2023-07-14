import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { collaboratorSchedule } from './CollaboratorSchedule.entity';

@Entity()
export class Collaborator {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  first_name!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  surname!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  rol!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  department!: string;

  @Column({ type: 'int', width: 10, nullable: false })
  phone!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string;

  @OneToMany(() => collaboratorSchedule, (schedule) => schedule.collaborator, {
    cascade: ['insert'],
  })
  schedule!: collaboratorSchedule[];
}
