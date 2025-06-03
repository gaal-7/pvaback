// src/justification/justification.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Justification } from './justification.entity';
import { User } from '../users/user.entity';

@Injectable()
export class JustificationService {
  constructor(
    @InjectRepository(Justification)
    private justificationRepository: Repository<Justification>,
  ) {}

  async createJustification(user: User, reason: string, date: string): Promise<Justification> {
    const justification = this.justificationRepository.create({
      user,
      reason,
      date,
      status: 'pending',
    });
    return this.justificationRepository.save(justification);
  }

  async getAllJustifications(): Promise<Justification[]> {
    return this.justificationRepository.find();
  }

  async getJustificationById(id: number): Promise<Justification> {
    return this.justificationRepository.findOneBy({ id });
  }

  async updateStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<Justification> {
    const justification = await this.justificationRepository.findOneBy({ id });
    if (!justification) {
      throw new Error('Justification not found');
    }
    justification.status = status;
    return this.justificationRepository.save(justification);
  }
}
