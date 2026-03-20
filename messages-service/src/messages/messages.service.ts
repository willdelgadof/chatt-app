import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class MessagesService {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async create(sender: string, message: string): Promise<Message> {
    const newMessage = new this.messageModel({ sender, message });
    const saved = await newMessage.save();
    await this.supabase.from('messages').insert({ sender, message });
    return saved;
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().sort({ createdAt: 1 }).exec();
  }
}