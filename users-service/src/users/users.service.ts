import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
  private supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  async getProfile(userId: string) {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) return { id: userId, message: 'Profile not found' };
    return data;
  }

  async getAllUsers() {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*');
    if (error) return [];
    return data;
  }
}