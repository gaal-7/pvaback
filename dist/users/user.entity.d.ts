import { Justification } from '../justification/justification.entity';
export declare enum UserRole {
    Alumno = "alumno",
    Docente = "docente",
    Administrativo = "administrativo",
    Admin = "admin"
}
export declare class User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    justifications: Justification[];
}
