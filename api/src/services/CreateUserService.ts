import bcrypt from 'bcryptjs';
import IUsersRepository from '../repositories/IUsersRepository';

import Users from '../entities/Users';
import AppError from '../errors/AppError';

interface IRequest {
  name: string;
  lastname: string;
  password: string;
  email: string;
  country: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    lastname,
    password,
    email,
    country,
  }: IRequest): Promise<Users> {
    const emailExists = await this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('O email já existe', 401);
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      lastname,
      password: passwordHash,
      email,
      country,
    });

    return user;
  }
}

export default CreateUserService;
