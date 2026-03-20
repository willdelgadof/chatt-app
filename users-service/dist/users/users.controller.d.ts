import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(authHeader: string): Promise<any>;
    getAllUsers(): Promise<any[]>;
}
