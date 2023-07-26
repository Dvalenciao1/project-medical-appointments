import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from 'src/common/models/Client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/Client.dto';
import { genders } from 'src/common/enums/client.enums';
import { ClientSerializer } from 'src/common/serializer/client.serializer';

describe('ClientService', () => {
  let service: ClientService;
  let clientRepository: Repository<Client>;

  const clientTokenRepository = getRepositoryToken(Client);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: clientTokenRepository,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    clientRepository = module.get<Repository<Client>>(clientTokenRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('clienRepository should be defined', () => {
    expect(clientRepository).toBeDefined();
  });
  describe('Create Client', () => {
    it('should create a client with createClientDto', async () => {
      const client: CreateClientDto = {
        first_name: 'D1aniel2',
        second_name: 'Adrian1',
        surname: 'Valencia',
        second_surname: 'Ortiz',
        dni: '0953032638',
        gender: genders.MALE,
        birth_date: new Date('2000-11-18'),
        phone: '0958780345',
        address: 'Sauces 2',
        email: 'dv237968@gmail.com',
        health_insurance: true,
      };
      const expectedClient = {
        first_name: 'D1aniel2',
        second_name: 'Adrian1',
        surname: 'Valencia',
        second_surname: 'Ortiz',
        dni: '0953032638',
        gender: genders.MALE,
        birth_date: new Date('2000-11-18'),
        phone: '0958780345',
        address: 'Sauces 2',
        email: 'dv237968@gmail.com',
      };

      // Mock the repository's save method to return the expectedClient object
      jest
        .spyOn(clientRepository, 'save')
        .mockResolvedValue(
          expectedClient as unknown as Promise<ClientSerializer>,
        );

      const result = await service.createClient(client);

      expect(result).toEqual(expectedClient);
      expect(clientRepository.save).toHaveBeenCalledWith(client);
    });
  });
  describe('Find Client width id', () => {
    it('should find all clients ', async () => {
      const clientId = 1;
      const expectedClient = {
        id: 1,
        first_name: 'D1aniel2',
        second_name: 'Adrian1',
        surname: 'Valencia',
        second_surname: 'Ortiz',
        dni: '0953032638',
        gender: genders.MALE,
        birth_date: new Date('2000-11-18'),
        phone: '0958780345',
        address: 'Sauces 2',
        email: 'dv237968@gmail.com',
        health_insurance: true,
      };

      // Mock the repository's save method to return the expectedClient object
      jest
        .spyOn(clientRepository, 'findOne')
        .mockResolvedValue(
          expectedClient as unknown as Promise<ClientSerializer>,
        );

      const result = await service.findClientsById(clientId);

      expect(result).toEqual(expectedClient);
      expect(clientRepository.findOne).toHaveBeenCalledWith(clientId);
    });
  });
});
