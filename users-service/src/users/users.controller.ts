import { Controller, Get, Param, Headers, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  async getProfile(@Headers('authorization') authHeader: string) {
    if (!authHeader) throw new UnauthorizedException('No token provided');
    const token = authHeader.split(' ')[1];
    const base64 = token.split('.')[1];
    const decoded = JSON.parse(Buffer.from(base64, 'base64').toString());
    return this.usersService.getProfile(decoded.sub);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
