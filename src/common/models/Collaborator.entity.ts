import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { collaboratorSchedule } from './CollaboratorSchedule.entity';
import { medicalAppointment } from './MedicalAppointment.entity';
import { roles } from '../enums/collaborator.enums';

@Entity()
export class Collaborator {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  first_name!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  surname!: string;

  @Column({ type: 'enum', enum:roles, nullable: false })
  rol!: roles;

  @Column({ type: 'varchar', length: 50, nullable: false })
  department!: string;

  @Column({ type: 'int', width: 10, nullable: false })
  phone!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string;

  @OneToMany(() => collaboratorSchedule, (schedule) => schedule.collaborator, {
    cascade: ['insert', 'update'],
    eager: true,
    onDelete: 'CASCADE',
  })
  schedules?: collaboratorSchedule[];

  @OneToMany(
    () => medicalAppointment,
    (appointment) => appointment.collaborator,
    {
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  appointments!: medicalAppointment[];
}
