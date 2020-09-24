import { getRepository, Repository } from 'typeorm';
import Users from '../entities/Users';
import IUsersRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async create({
    name,
    lastname,
    email,
    password,
    country,
  }: ICreateUserDTO): Promise<Users> {
    const user = this.ormRepository.create({
      name,
      lastname,
      email,
      password,
      country,
    });

    this.ormRepository.save(user);

    return user;
  }

  public async find() {
    const allUsers = this.ormRepository.find();

    return allUsers;
  }

  public async findById(id: number): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({ id });

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.ormRepository.findOne({ email });

    return user;
  }
}

export default UsersRepository;
