export declare class UsersService {
    private supabase;
    getProfile(userId: string): Promise<any>;
    getAllUsers(): Promise<any[]>;
}
