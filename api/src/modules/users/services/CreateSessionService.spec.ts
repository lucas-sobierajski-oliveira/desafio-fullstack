import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashPovider/fakes/FakeHashProvider';
import FakeAuthProvider from '@modules/users/providers/AuthProvider/fakes/FakeAuthProvider';

import CreateUserService from '@modules/users/services/CreateUserService';
import CreateSessionService from '@modules/users/services/CreateSessionService';


describe('CreateSession',() => {
  it('should be able to create a new session', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const fakeAuthProvider = new FakeAuthProvider();

    const createSession = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeAuthProvider
    );

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

    const session = await createSession.execute({
      email: user.email,
      password: user.password
    })

    expect(session).toHaveProperty('token');

  })
  it('should not be able to create a new session with an incorrect email', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const fakeAuthProvider = new FakeAuthProvider();

    const createSession = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeAuthProvider
    );

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

    await expect(createSession.execute({
      email: 'incorrect@email.com',
      password: user.password
    })).rejects.toBeInstanceOf(AppError);
  })

  it('should not be able to create a new session with an incorrect password', async ()=>{
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const fakeAuthProvider = new FakeAuthProvider();

    const createSession = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeAuthProvider
    );

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

    await expect(createSession.execute({
      email: user.email,
      password: 'incorrectPassword'
    })).rejects.toBeInstanceOf(AppError);

  })
})
