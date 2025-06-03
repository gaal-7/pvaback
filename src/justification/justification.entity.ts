import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Justification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.justifications, { eager: true })
  user: User;

  @Column()
  reason: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ default: 'pending' })
  status: 'pending' | 'approved' | 'rejected';

  @CreateDateColumn()
  createdAt: Date;
}
