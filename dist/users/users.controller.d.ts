import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./user.entity").User[]>;
    createUser(body: {
        username: string;
        password: string;
        role: string;
    }): Promise<import("./user.entity").User>;
}
