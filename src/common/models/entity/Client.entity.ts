import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  first_name!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  second_name?: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  surname!: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  second_surname!: string;

  @Column({ type: 'int', width: 10, nullable: false })
  dni!: number;

  @Column({ type: 'set', enum: ['Female', 'Male'], nullable: false })
  gender!: string;

  @Column({ type: 'date', nullable: true })
  birth_date!: Date;

  @Column({ type: 'int', width: 10, nullable: false })
  phone!: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  address!: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string;

  @Column({ type: 'boolean', nullable: false })
  health_insurance!: boolean;
}
