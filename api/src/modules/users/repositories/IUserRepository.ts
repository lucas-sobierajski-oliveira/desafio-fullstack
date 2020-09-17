import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/models/User";

export default interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO) : Promise<User>;
  save(user: User) : Promise<User>;
  findByEmail(email: string) : Promise<User | undefined>;
}
