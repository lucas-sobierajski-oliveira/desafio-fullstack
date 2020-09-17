import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';


class UsersController {

  public async create(request: Request, response : Response){
    const { name, surname, email, password, phone } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      surname,
      email,
      password,
      phone
    });

    return response.status(201).json({
      status: 'success',
      data : {
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone
        }
      }
    })
  }
}

export default UsersController;
