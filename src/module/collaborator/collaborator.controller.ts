import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorDto } from './dto/Collaborator.dto';

@Controller('collaborator')
export class CollaboratorController {
  constructor(private collaboratorService: CollaboratorService) {}

  @Get()
  async findCollaborators() {
    return await this.collaboratorService.findCollaborators();
  }

  @Post()
  async createCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService.createCollaborator(collaborator);
  }

  @Put()
  async updateCollaborator(@Body() collaborator: CollaboratorDto) {
    return await this.collaboratorService.updateCollaborator(collaborator);
  }
}
