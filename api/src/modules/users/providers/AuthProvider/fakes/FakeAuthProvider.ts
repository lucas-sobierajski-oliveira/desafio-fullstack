import IAuthProvider from "../models/IAuthProvider";
import IGeneratedTokenDTO from '@modules/users/dtos/IGeneratedTokenDTO';

// fake auth provider to execute the tests
class FakeAuthProvider implements IAuthProvider {
  public generateToken (user_id : number) : IGeneratedTokenDTO{

    return {
      token: 'token',
      exp: 32424234
    };
  }
}

export default FakeAuthProvider;
