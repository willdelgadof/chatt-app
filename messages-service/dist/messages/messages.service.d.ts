import { Model } from 'mongoose';
import { Message } from './message.schema';
export declare class MessagesService {
    private messageModel;
    private supabase;
    constructor(messageModel: Model<Message>);
    create(sender: string, message: string): Promise<Message>;
    findAll(): Promise<Message[]>;
}
