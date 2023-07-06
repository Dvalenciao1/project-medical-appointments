import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class medicalSchedule {
    @PrimaryGeneratedColumn()
    id?: number
}