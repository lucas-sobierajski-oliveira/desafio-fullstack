import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashPovider/fakes/FakeHashProvider';

import CreateUserService from '@modules/users/services/CreateUserService';

describe('CreateUser',() => {
  it('should be able to create a new user', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    const user = await createUser.execute({
      name: 'John',
      surname: 'Doe',
      phone: '4990900000',
      email: 'johndoe@example.com',
      password: '1234567',
    })

    expect(user).toHaveProperty('id');

  })

  it('should not be able to create a new user with an existing email', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    await createUser.execute({
      name: 'John',
      surname: 'Doe',
      phone: '4990900000',
      email: 'johndoe@example.com',
      password: '1234567',
    })

    await expect(
      createUser.execute({
        name: 'John1',
        surname: 'Doe1',
        phone: '1231231233',
        email: 'johndoe@example.com',
        password: '1231421',
    })).rejects.toBeInstanceOf(AppError);

  })
})
