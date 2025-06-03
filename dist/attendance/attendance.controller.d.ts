import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<import("./attendance.entity").Attendance>;
    findAll(): Promise<import("./attendance.entity").Attendance[]>;
    findOne(id: number): Promise<import("./attendance.entity").Attendance>;
}
