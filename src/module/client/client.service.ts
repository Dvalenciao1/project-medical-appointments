import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto, CreateClientDto } from 'src/module/client/dto/Client.dto';
import { Client } from 'src/common/models/Client.entity';
import { Repository } from 'typeorm';
import { ClientSerializer } from 'src/common/serializer/client.serializer';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findClientByEmail(email: string): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: [{ email }],
    });
    if (!client) throw new NotFoundException('El usuario no existe');
    return client;
  }

  async findClients(): Promise<Client[]> {
    const clients = await this.clientRepository.find();
    return clients;
  }

  async createClient(client: CreateClientDto): Promise<Client> {
    try {
      return await this.clientRepository.save(client);
    } catch (error) {
      throw new BadRequestException('Algo salio mal', {
        description: error.message,
      });
    }
  }

  async findClientsById(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: [{ id }],
    });
    if (!client) throw new NotFoundException('El usuario no existe');
    return client;
  }

  async updateClient(client: ClientDto): Promise<Client> {
    if (!client.id) {
      return this.createClient(client);
    }

    const data = await this.clientRepository.save(client);
    if (!data) throw new BadRequestException('Error Server');
    return data;
  }

  async deleteClient(id: number): Promise<boolean> {
    const ClientExist = await this.findClientsById(id);

    if (!ClientExist) {
      throw new ConflictException('El cliente con el id no existe');
    }
    const rows = await this.clientRepository.delete({ id });
    return rows.affected == 1;
  }
}
