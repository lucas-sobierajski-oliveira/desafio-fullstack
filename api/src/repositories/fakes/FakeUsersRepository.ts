import Users from '../../entities/Users';
import IUsersRepository from '../IUsersRepository';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private users: Users[] = [];

  public async create({
    name,
    lastname,
    email,
    password,
    country,
  }: ICreateUserDTO): Promise<Users> {
    const user = new Users();

    Object.assign(user, {
      id: this.users.length + 1,
      name,
      lastname,
      email,
      password,
      country,
    });

    this.users.push(user);

    return user;
  }

  public async find() {
    return this.users;
  }

  public async findById(id: number): Promise<Users | undefined> {
    const user = this.users.find(user => id === user.id);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = this.users.find(user => email === user.email);

    return user;
  }
}

export default UsersRepository;
