import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from 'src/module/client/dto/Client.dto';

@Controller('client')
export class ClientController {
  constructor(private clienteService: ClientService) {}
  @Get()
  findClients() {
    return this.clienteService.findClients();
  }

  @Get('/:id')
  async findClient(@Param('id') id: number) {
    const client = await this.clienteService.findClientsById(id);
    if (!client) {
      throw new NotFoundException('El cliente no existe');
    }
    return { data: client };
  }

  @Post()
  async createClient(@Body() client: ClientDto) {
    try {
      const data = await this.clienteService.createClient(client);
      return { data, message: 'Se creo el nuevo cliente' };
    } catch (error) {
      if (error.errno == 1062)
        throw new ConflictException(
          `Ese correo ya esta registrado con un Paciente`,
        );
    }
  }

  @Put()
  async updateClient(@Body() client: ClientDto) {
    try {
      return await this.clienteService.updateClient(client);
    } catch (error) {
      return { error, message: error.message };
    }
  }

  @Delete('/:id')
  deleteClient(@Param('id') id: number) {
    try {
      return this.clienteService.deleteClient(id);
    } catch (error) {
      return { error, message: error.message };
    }
  }
}
