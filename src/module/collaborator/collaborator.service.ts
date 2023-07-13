import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collaborator } from 'src/common/models/Collaborator.entity';
import { Repository } from 'typeorm';
import { CollaboratorDto } from './dto/Collaborator.dto';

@Injectable()
export class CollaboratorService {
  constructor(
    @InjectRepository(Collaborator)
    private readonly collaboratorRepository: Repository<Collaborator>,
  ) {}

  async findCollaborators(): Promise<Collaborator[]> {
    const collaborators = await this.collaboratorRepository.find();
    return collaborators;
  }

  async createCollaborator(
    collaborator: CollaboratorDto,
  ): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }

  async updateCollaborator(
    collaborator: CollaboratorDto,
  ): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }
}
