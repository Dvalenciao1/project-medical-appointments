import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientModule } from './client.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from 'src/common/models/Client.entity';
import { ClientService } from './client.service';
import { ClientSerializer } from 'src/common/serializer/client.serializer';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientModule],
    })
      .overrideProvider(getRepositoryToken(Client))
      .useValue(jest.fn())
      .compile();

    controller = module.get<ClientController>(ClientController);
    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getClients', () => {
    it('return an array of type ClientSerializer', async () => {
      jest.spyOn(service, 'findClients').mockImplementation(() =>
        Promise.resolve([
          {
            id: 1,
            first_name: 'D1aniel2',
            second_name: 'Adrian1',
            surname: 'Valencia',
            second_surname: 'Ortiz',
            dni: '0953032638',
            gender: 'male',
            birth_date: '2000-11-18',
            phone: '0958780345',
            address: 'Sauces 2',
            email: 'dv237968@gmail.com',
            health_insurance: true,
          },
        ] as unknown as Promise<Client[]>),
      );
      const result = await controller.findClients();
      console.log(result[0] instanceof ClientSerializer);
      expect(result).toHaveLength(1);
      expect(result[0] instanceof ClientSerializer).toEqual(true);
    });
  });
});
