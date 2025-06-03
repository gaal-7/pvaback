// src/justification/justification.controller.ts
import { Controller, Get, Post, Body, Param, Patch, UseGuards, Req } from '@nestjs/common';
import { JustificationService } from './justification.service';
import { JwtAuthGuard } from    '../auth/jwt-auth.guard';

@Controller('justifications')
@UseGuards(JwtAuthGuard)
export class JustificationController {
  constructor(private readonly justificationService: JustificationService) {}

  @Post()
  async create(
    @Req() req,
    @Body() body: { reason: string; date: string }
  ) {
    return this.justificationService.createJustification(req.user, body.reason, body.date);
  }

  @Get()
  async findAll() {
    return this.justificationService.getAllJustifications();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.justificationService.getJustificationById(id);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: 'pending' | 'approved' | 'rejected'
  ) {
    return this.justificationService.updateStatus(id, status);
  }
}
