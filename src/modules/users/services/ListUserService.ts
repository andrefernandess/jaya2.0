import User from '../typeorm/entities/user';
import UsersRepository from '../typeorm/repositories/UserRepository';

class ListUserService {
  public async execute(): Promise<User[] | null> {
    const usersRepository = new UsersRepository();

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;
