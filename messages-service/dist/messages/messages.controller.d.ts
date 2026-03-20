import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(body: {
        sender: string;
        message: string;
    }): Promise<import("./message.schema").Message>;
    findAll(): Promise<import("./message.schema").Message[]>;
}
