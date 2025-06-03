import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findByUsername(username: string): Promise<User | undefined>;
    createUser(username: string, password: string, role: string): Promise<User>;
}
