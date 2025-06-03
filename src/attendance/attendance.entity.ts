import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  status: 'entrada' | 'salida';

  @CreateDateColumn()
  timestamp: Date;
}
