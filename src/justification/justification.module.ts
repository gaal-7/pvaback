// src/justification/justification.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Justification } from './justification.entity';
import { JustificationService } from './justification.service';
import { JustificationController } from './justification.controller';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Justification, User])],
  providers: [JustificationService],
  controllers: [JustificationController],
  exports: [JustificationService],
})
export class JustificationModule {}
