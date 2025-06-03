import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.usersService.findByUsername(loginDto.username);
    const isMatch = user && await bcrypt.compare(loginDto.password, user.password);

    if (isMatch) {
      const payload = { username: user.username, sub: user.id, role: user.role };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
