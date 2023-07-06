import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Colaborator {
    @PrimaryGeneratedColumn()
    id?: number

}