import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto, CreateClientDto } from 'src/module/client/dto/Client.dto';
import { ApiTags } from '@nestjs/swagger';
import { ClientSerializer } from 'src/common/serializer/client.serializer';
@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private clienteService: ClientService) {}

  @Get()
  async findClients(): Promise<ClientSerializer[]> {
    return await this.clienteService.findClients();
  }

  @Get('email')
  async getClientByEmail(
    @Query('email') email: string,
  ): Promise<ClientSerializer> {
    const response = await this.clienteService.findClientByEmail(email);
    return response;
  }

  @Get('/:id')
  async getClientById(@Param('id') id: number): Promise<ClientSerializer> {
    const response = await this.clienteService.findClientsById(id);
    return response;
  }

  @Post()
  async createClient(@Body() client: CreateClientDto): Promise<ClientSerializer> {
    const response = await this.clienteService.createClient(client);
    return response;
  }

  @Put()
  async updateClient(@Body() client: ClientDto): Promise<ClientSerializer> {
    const response = await this.clienteService.updateClient(client);
    return response;
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: number): Promise<boolean> {
    const response = await this.clienteService.deleteClient(id);
    return response;
  }
}
