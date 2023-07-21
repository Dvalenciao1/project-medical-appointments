import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from 'src/common/models/Client.entity';
import { Repository } from 'typeorm';

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
});
