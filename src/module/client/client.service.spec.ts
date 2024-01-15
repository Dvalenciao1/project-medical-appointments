import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from './entity/Client.entity';
import { Collaborator } from '../collaborator/entity/Collaborator.entity';
import { Repository } from 'typeorm';

describe('ClientService', () => {
  let service: ClientService;
  let repository: Repository<Client>;
  let repository1: Repository<Collaborator>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getRepositoryToken(Client),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    repository = module.get<Repository<Client>>(getRepositoryToken(Client));
  });
  describe('create', () => {
    it('should create a user', async () => {
      const repSpy = jest
        .spyOn(repository, 'save')
        .mockResolvedValue({} as Client);
      expect(service.createClient(new Client())).resolves.toEqual({});
      expect(repSpy).toBeCalledWith({});
      expect(repSpy).toBeCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const repSpy = jest.spyOn(repository, 'find').mockResolvedValue([
        {
          id: 1,
          fullname: 'daniel',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'dv237968@gmail.com',
          password: 'pepito123',
        },
        {
          id: 2,
          fullname: 'Davo',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'dvalenciao@est.ups.edu.ec',
          password: 'ElPepe',
        },
        {
          id: 3,
          fullname: 'Gvo',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'gadajo5@hotmail.com',
          password: 'Terreneitor',
        },
      ] as Client[]);
      expect(service.findAll()).resolves.toEqual([
        {
          id: 1,
          fullname: 'daniel',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'dv237968@gmail.com',
          password: 'pepito123',
        },
        {
          id: 2,
          fullname: 'Davo',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'dvalenciao@est.ups.edu.ec',
          password: 'ElPepe',
        },
        {
          id: 3,
          fullname: 'Gvo',
          dni: '123213123123',
          appointments: [],
          collaborator: {},
          email: 'gadajo5@hotmail.com',
          password: 'Terreneitor',
        },
      ]);
      expect(repSpy).toBeCalledTimes(1);
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
