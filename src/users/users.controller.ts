import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(
    @Body() body: { username: string; password: string; role: string },
  ) {
    const { username, password, role } = body;

    if (!username || !password || !role) {
      throw new BadRequestException('username, password and role are required');
    }

    // Aquí puedes agregar validación de role si quieres

    return this.usersService.createUser(username, password, role);
  }
}
