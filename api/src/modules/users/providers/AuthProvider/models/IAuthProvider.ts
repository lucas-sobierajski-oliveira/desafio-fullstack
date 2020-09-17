import IGeneratedTokenDTO from "@modules/users/dtos/IGeneratedTokenDTO";

export default interface IAuthProvider {
  generateToken(user_id : number) : IGeneratedTokenDTO;
}
