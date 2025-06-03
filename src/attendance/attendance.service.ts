import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
  ) {}

  create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const attendance = this.attendanceRepository.create(createAttendanceDto);
    return this.attendanceRepository.save(attendance);
  }

  findAll(): Promise<Attendance[]> {
    return this.attendanceRepository.find();
  }

  findOne(id: number): Promise<Attendance> {
    return this.attendanceRepository.findOne({ where: { id } });
  }
}
