import { getRepository, Repository } from 'typeorm';
import User from '@modules/users/infra/typeorm/models/User';

import IUserRespository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import { validate } from 'class-validator';
import ValidationError from '@shared/errors/ValidationError';

class UsersRepository implements IUserRespository {
  private ormRepository : Repository<User>;

  constructor () {
    this.ormRepository = getRepository(User);
  }

  // Insert an User object into db
  public async save(user: User) : Promise<User>{
    return this.ormRepository.save(user);
  }

  // Create a new User object
  public async create({ name, surname, email, password, phone }: ICreateUserDTO) : Promise<User>{
    const user = this.ormRepository.create({
      name,
      surname,
      phone,
      email,
      password
    });

    // If there are errrors throw a new exception
    const errors = await validate(user);

    if(errors.length > 0){
      throw new ValidationError(errors)
    }
    return user;
  }

  // Find User by email
  public async findByEmail(email: string) : Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where:{
        email,
      }
    })
    return user;
  }
}

export default UsersRepository;
