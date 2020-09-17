import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from "../infra/typeorm/models/User";
import IHashProvider from '../providers/HashPovider/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';


interface IRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
}

@injectable()
class CreateUserService {

  constructor(
    @inject('UsersRepository')
    private usersRepository : IUserRepository,
    @inject('HashProvider')
    private hashProvider : IHashProvider
  ){}

  // Create a new user
  public async execute({ name, surname, email, password, phone } : IRequest) : Promise<User>{

    if(!(name && surname && email && password && phone)){
      throw new AppError('Please, fill all the fields');
    }

    const checkUserExists = await this.usersRepository.findByEmail(email);

    if(checkUserExists){
      throw new AppError('User already exists');
    }

    // Hash password
    const passwordHashed = await this.hashProvider.generate(password);

    const userValidated = await this.usersRepository.create({
      name,
      surname,
      email,
      password: passwordHashed,
      phone
    })

    const userCreated = await this.usersRepository.save(userValidated);

    return userCreated;
  }
}

export default CreateUserService;
