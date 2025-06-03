import { User } from '../users/user.entity';
export declare class Justification {
    id: number;
    user: User;
    reason: string;
    date: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Date;
}
