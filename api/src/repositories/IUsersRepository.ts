import Users from '../entities/Users';
import ICreateUser from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  find(): Promise<Users[]>;
  findById(id: number): Promise<Users | undefined>;
  findByEmail(email: string): Promise<Users | undefined>;
  create(data: ICreateUser): Promise<Users>;
}

export default IUsersRepository;
