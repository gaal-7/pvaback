import { Repository } from 'typeorm';
import { Justification } from './justification.entity';
import { User } from '../users/user.entity';
export declare class JustificationService {
    private justificationRepository;
    constructor(justificationRepository: Repository<Justification>);
    createJustification(user: User, reason: string, date: string): Promise<Justification>;
    getAllJustifications(): Promise<Justification[]>;
    getJustificationById(id: number): Promise<Justification>;
    updateStatus(id: number, status: 'pending' | 'approved' | 'rejected'): Promise<Justification>;
}
