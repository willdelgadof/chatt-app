import { OnModuleInit } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
export declare class NotificationsService implements OnModuleInit {
    private readonly logger;
    constructor(logger: LoggerService);
    onModuleInit(): void;
}
