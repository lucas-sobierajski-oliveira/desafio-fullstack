import IHashProvider from "../models/IHashProvider";
import { hash, compare } from 'bcryptjs';

class BCryptHashProvider implements IHashProvider {

  // generate a hash string based on a payload
  public async generate(payload : string) : Promise<string> {
    return await hash(payload, 8);
  }

  // compare the payload with the hashed string
  public async compareHash(payload : string, hashed : string) : Promise<boolean>{
    return await compare(payload , hashed);
  }
}

export default BCryptHashProvider;
