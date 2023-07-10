import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
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
  findClient(@Param('id') id: number) {
    return this.clienteService.findClientsById(id);
  }

  @Post()
  createClient(@Body() client: ClientDto) {
    return this.clienteService.createClient(client).then((data) => {
      console.log(data);
    });
  }

  @Put()
  updateClient(@Body() client: ClientDto) {
    return this.clienteService.updateClient(client);
  }

  @Delete('/:id')
  deleteClient(@Param('id') id: number) {
    return this.clienteService.deleteClient(id);
  }
}
