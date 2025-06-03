import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async createUser(
    username: string,
    password: string,
    role: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const roleEnum = UserRole[role.charAt(0).toUpperCase() + role.slice(1) as keyof typeof UserRole];
    if (!roleEnum) {
      throw new Error('Role inválido');
    }

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
      role: roleEnum,
    });

    return this.usersRepository.save(user);
  }
}
