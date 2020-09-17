import * as jwt from "jsonwebtoken";
import IAuthProvider from "../models/IAuthProvider";
import auth from '@config/auth';
import IGeneratedTokenDTO from "@modules/users/dtos/IGeneratedTokenDTO";

interface IDecoded {
  exp : number;
}

class JWTAuthProvider implements IAuthProvider {

  // Generate a new token and get the expiration timestamp of it
  public generateToken (user_id : number) : IGeneratedTokenDTO{
    const token = jwt.sign(
      { id: user_id },
      auth.secret,
      { expiresIn: auth.expiresIn }
    )

    const { exp } = jwt.decode(token) as IDecoded;

    return {
      token,
      exp
    };
  }
}

export default JWTAuthProvider;
