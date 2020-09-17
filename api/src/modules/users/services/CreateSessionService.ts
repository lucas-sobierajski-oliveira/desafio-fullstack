import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import User from "../infra/typeorm/models/User";
import IAuthProvider from "../providers/AuthProvider/models/IAuthProvider";
import IHashProvider from "../providers/HashPovider/models/IHashProvider";
import IUserRepository from "../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string
}

interface IResponse {
  user: User;
  token : {
    value: string;
    exp: number;
  }
}

@injectable()
class CreateSessionService {

  constructor(
    @inject('UsersRepository')
    private usersRepository : IUserRepository,
    @inject('HashProvider')
    private hashProvider : IHashProvider,
    @inject('AuthProvider')
    private authProvider : IAuthProvider,
  ){

  }

  // Create a new session returning user, token and the expiration time of this token
  public async execute({ email, password } : IRequest) : Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Incorrect email');
    }

    const checkPassMatch = await this.hashProvider.compareHash(password, user.password);

    if(!checkPassMatch) {
      throw new AppError('Incorrect Pass');
    }

    const token = this.authProvider.generateToken(user.id);

    return {
      user,
      token: {
        value: token.token,
        exp: token.exp,
      }
    };

  }
}

export default CreateSessionService;
