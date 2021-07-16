import { ErrorHandler } from '../../../../handlers/ErrorHandler';

import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const user = this.usersRepository.findById(user_id);

        if (!user) {
            const err = {
                name: 'ListUserByIdFailed',
                message: 'User not found',
                statusCode: 404,
                description: 'User with this id not found.',
            };

            throw new ErrorHandler(err);
        }

        const adminUser = this.usersRepository.turnAdmin(user);

        return adminUser;
    }
}

export { TurnUserAdminUseCase };
