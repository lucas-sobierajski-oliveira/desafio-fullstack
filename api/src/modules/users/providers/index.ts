import { container } from 'tsyringe';

import IAuthProvider from './AuthProvider/models/IAuthProvider';
import IHashProvider from './HashPovider/models/IHashProvider';

import BCryptHashProvider from './HashPovider/implementations/BCryptHashProvider';
import JWTAuthProvider from './AuthProvider/implementations/JWTAuthProvider';

// Register of injections (This file is import in shared/container/index.ts)
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
container.registerSingleton<IAuthProvider>('AuthProvider', JWTAuthProvider);

