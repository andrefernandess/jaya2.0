import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import User from '../typeorm/entities/user';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: IRequest): Promise<User | null> {
    const usersRepository = new UsersRepository();
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
