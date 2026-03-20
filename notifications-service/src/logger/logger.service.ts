import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';

const logtail = new Logtail('mZdCzQ4iD86bNMbD5qwH3TGQ');

@Injectable()
export class LoggerService {
  private logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.simple(),
        ),
      }),
      new LogtailTransport(logtail),
    ],
  });

  log(message: string) { this.logger.info(message); }
  error(message: string) { this.logger.error(message); }
  warn(message: string) { this.logger.warn(message); }
}