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
import {ClientService} from './client.service';
import {ClientDto} from 'src/module/client/dto/Client.dto';

@Controller('client')
export class ClientController {
    constructor(private clienteService: ClientService) {
    }

    @Get()
    async findClients() {
        return await this.clienteService.findClients();
    }

    @Get('all')
    async getClientByEmail(@Query('email') email: string) {
        const client = await this.clienteService.findClientByEmail(email);
        return {data: client, message: 'Se ha encontrado una coincidencia'};
    }

    @Get('/:id')
    async getClientById(@Param('id') id: number) {
        const client = await this.clienteService.findClientsById(id);
        return {data: client, message: 'Se ha encontrado una coincidencia'};
    }

    @Post()
    async createClient(@Body() client: ClientDto) {
        const data = await this.clienteService.createClient(client);
        return {data, message: 'Se creo el nuevo cliente'};
    }

    @Put()
    async updateClient(@Body() client: ClientDto) {
        const response = await this.clienteService.updateClient(client);
        return {response, message: 'El paciente fue actualizado'};
    }

    @Delete('/:id')
    async deleteClient(@Param('id') id: number) {
        const response = await this.clienteService.deleteClient(id);
        return {response, message: 'El paciente fue eliminado '};
    }
}
