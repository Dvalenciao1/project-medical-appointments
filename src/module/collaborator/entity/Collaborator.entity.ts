import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { collaboratorSchedule } from 'src/module/collaborator-schedule/entity/CollaboratorSchedule.entity';
import { medicalAppointment } from 'src/module/medical-appointment/entity/MedicalAppointment.entity';
@Entity()
export class Collaborator {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  department!: string;

  @Column({ type: 'varchar', default: 'doctor', nullable: false })
  role: string;

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
