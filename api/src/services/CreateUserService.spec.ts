import CreateUsersService from './CreateUserService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

describe('CreateUserService', () => {
  it('Deve criar um novo usuário', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUsersService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'lucas',
      lastname: 'oliveira',
      email: 'oliveira@gmail.com',
      country: 'brazil',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.id).toBe(1);
  });

  it('Não deve permitido salvar dois usuários com o mesmo email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUsersService(fakeUsersRepository);

    await createUserService.execute({
      name: 'lucas',
      lastname: 'oliveira',
      email: 'oliveira@gmail.com',
      country: 'brazil',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'talles',
        lastname: 'oliveira',
        email: 'oliveira@gmail.com',
        country: 'brazil',
        password: '654321',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
