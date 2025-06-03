import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Justification } from '../justification/justification.entity';

export enum UserRole {
  Alumno = 'alumno',
  Docente = 'docente',
  Administrativo = 'administrativo',
  Admin = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @OneToMany(() => Justification, justification => justification.user)
  justifications: Justification[]; // ← Relación inversa correcta
}
