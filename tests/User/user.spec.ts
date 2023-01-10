import User from '@modules/users/typeorm/entities/user';
import { MockProxy } from 'jest-mock-extended';
import request from 'supertest';
import { Repository } from 'typeorm';

jest.mock('typeorm');
jest.mock('../../src/middlewares/logger');
describe('## User Module ##', () => {
  // Importamos a instância do express para usar com supertest
  const { app } = require('@shared/http/server').default;

  // Aqui é a instância do typeorm que vai na base de dados
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const repository = require('typeorm').repositoryMock as MockProxy<
    Repository<User>
  >;

  // Vamos separar os endpoints do crud por blocos

  describe('## GET ##', () => {
    // Aqui vamos escrever os testes para o método findOne da classe de serviço
    test('should return error when user does not exists', async () => {
      // A condição para retornar esse erro é o retorno da base ser nulo
      // Então vamos mocar o retorno do typeorm

      // Assim quando o typeorm resolver a chamada findOne,
      // o retorno é o objetos que passarmos no mock
      repository.find().mockResolvedValue(null);

      // Aqui estou fazendo um request para a api
      await request(app)
        .get('/api/users/some-id')
        .expect(404, {
          errors: [
            {
              code: 'USER_NOT_FOUND',
              message: 'Usuário não encontrado',
              status: 404,
            },
          ],
        });
    });
  });
});
