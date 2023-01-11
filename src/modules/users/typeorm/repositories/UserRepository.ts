import { dataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/user';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }

  public async create({
    name,
    email,
    password,
  }: IRequest): Promise<User | null> {
    const user = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }

  public async findByName(name: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({ name });

    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  public async find(): Promise<User[] | null> {
    const users = await this.ormRepository.find();

    return users;
  }
}

export default UsersRepository;
