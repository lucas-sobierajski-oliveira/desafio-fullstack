import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import AppError from '../errors/AppError';

class UsersController {
  async create(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      country: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Parâmetros inválidos', 400);
    }

    const { name, lastname, password, email, country } = request.body;

    const createUserService = new CreateUserService(new UsersRepository());
    const user = await createUserService.execute({
      name,
      lastname,
      password,
      email,
      country,
    });

    return response.status(201).json(user);
  }

  async showAll(request: Request, response: Response) {
    const userRepository = new UsersRepository();

    const allUsers = await userRepository.find();

    if (allUsers.length < 1) {
      throw new AppError('Não existem registros', 404);
    }

    return response.send(allUsers);
  }

  async showOne(request: Request, response: Response) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(request.params))) {
      throw new AppError('Parâmetro inválido', 400);
    }

    const { id } = request.params;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(Number(id));

    if (!user) {
      throw new AppError('Id inexistente', 404);
    }

    return response.send(user);
  }
}

export default new UsersController();
