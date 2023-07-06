import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { medicalAppointment } from './MedicalAppointment.entity'

@Entity()
export class medicalInvoice {
    @PrimaryGeneratedColumn()
    id?: number

    @OneToMany(type => medicalAppointment, appointment => appointment)
    id_appointment?: medicalAppointment[]

    @Column({ length: 500 })
    description?: string

    @Column()
    total_value?: number

    @Column()
    payment_method?: string

    @Column()
    type?: string

}