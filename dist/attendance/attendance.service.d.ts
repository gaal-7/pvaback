import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceService {
    private readonly attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance>;
    findAll(): Promise<Attendance[]>;
    findOne(id: number): Promise<Attendance>;
}
