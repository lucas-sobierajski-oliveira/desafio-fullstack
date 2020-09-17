import IHashProvider from '../models/IHashProvider';

// Fake hash provider to excecute the tests.
export default class FakeHashProvider implements IHashProvider {

  public async generate(payload : string) : Promise<string> {
    return payload;
  }

  public async compareHash(payload : string, hashed : string) : Promise<boolean> {
    return payload === hashed;
  }
}
