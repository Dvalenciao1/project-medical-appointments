import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
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

  private readonly ERRORS = {
    1062: 'Error correo duplicado',
    1364: 'Error no existe la llave foreana',
  };

  async find(): Promise<Collaborator[]> {
    const collaborators = await this.collaboratorRepository.find();
    return collaborators;
  }

  async findOneByEmail(email: string): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.findOne({
      where: [{ email }],
    });
    return collaborators;
  }

  async create(collaborator: CollaboratorDto): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }

  async update(collaborator: CollaboratorDto): Promise<Collaborator> {
    const collaborators = await this.collaboratorRepository.save(collaborator);
    return collaborators;
  }

  async delete(id: number): Promise<{}> {
    const collaborators = await this.collaboratorRepository.delete({ id });
    return { is_delete: collaborators.affected == 1 };
  }
}
