import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

import Users from '../entities/Users';
import AppError from '../errors/AppError';

class UsersController {
  async create(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      country: Yup.string().notRequired(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Parâmetros inválidos', 400);
    }

    const { name, lastname, password, email, country } = request.body;

    const usersRepository = await getRepository(Users);

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await usersRepository.create({
      name,
      lastname,
      password: passwordHash,
      email,
      country: country ? country : '',
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export default new UsersController();
