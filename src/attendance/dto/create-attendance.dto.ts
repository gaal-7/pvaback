export class CreateAttendanceDto {
  userId: number;
  status: 'entrada' | 'salida';
}
