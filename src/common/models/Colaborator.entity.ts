import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Colaborator {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  rol!: string;

  @Column()
  department!: string;

  @Column()
  phone!: number;
}
