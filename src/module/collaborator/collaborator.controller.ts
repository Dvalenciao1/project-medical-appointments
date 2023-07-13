import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorDto } from './dto/Collaborator.dto';

@Controller('collaborator')
export class CollaboratorController {
  constructor(private collaboratorService: CollaboratorService) {}

  @Get()
  async findCollaborators() {
    return await this.collaboratorService.find();
  }

  @Get('email')
  async findCollaboratorByEmail(@Query('email') email: string) {
    return await this.collaboratorService.findOneByEmail(email);
  }

  @Post()
  async createCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService.create(collaborator);
  }

  @Put()
  async updateCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService.update(collaborator);
  }

  @Delete('/:id')
  async deleteCollaborator(@Param('id') id: number) {
    return await this.collaboratorService.delete(id);
  }
}
