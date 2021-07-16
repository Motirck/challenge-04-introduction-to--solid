import { User } from '../../model/User';
import { ErrorHandler } from '../../../../handlers/ErrorHandler';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ name, email }: IRequest): User {
        const emailAlreadyExists = this.usersRepository.findByEmail(email);

        if (emailAlreadyExists) {
            const err = {
                name: 'CreateUserFailed',
                message: 'Informed email is already in use.',
                statusCode: 400,
                description: 'Informed email is already in use. Inform a diferent one.',
            };

            throw new ErrorHandler(err);
        }

        const user = this.usersRepository.create({ name, email });
        return user;
    }
}

export { CreateUserUseCase };
