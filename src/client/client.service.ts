import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto } from 'src/common/models/dto/Client.dto';
import { Client } from 'src/common/models/entity/Client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async findClient(client: ClientDto) {
    return await this.clientRepository.findOne({
      where: [{ id: client.id }, { email: client.email }],
    });
  }
  async findClientByEmail(email: string) {
    return await this.clientRepository.findOne({
      where: [{ email }],
    });
  }

  async findClients() {
    return await this.clientRepository.find();
  }

  createClient(client: ClientDto) {
    return this.clientRepository.save(client);
  }

  async findClientsById(id: number) {
    return await this.clientRepository.findOne({
      where: [{ id }],
    });
  }

  async updateClient(client: ClientDto) {
    let ClientExist = await this.findClientByEmail(client.email);

    if (ClientExist && ClientExist.id != client.id) {
      throw new ConflictException('El client con el email ya existe');
    }

    return await this.clientRepository.save(client);
  }

  async deleteClient(id: number) {
    const ClientExist = await this.findClientsById(id);

    if (!ClientExist) {
      throw new ConflictException('El cliente con el id no existe');
    }
    const rows = await this.clientRepository.delete({ id });
    return { client_email: ClientExist.email, is_delete: rows.affected == 1 };
  }
}
