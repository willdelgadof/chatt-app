import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(@Body() body: { sender: string; message: string }) {
    return this.messagesService.create(body.sender, body.message);
  }

  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }
}