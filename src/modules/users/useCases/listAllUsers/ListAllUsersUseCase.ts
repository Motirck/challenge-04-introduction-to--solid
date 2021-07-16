import { ErrorHandler } from '../../../../handlers/ErrorHandler';
import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
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

        if (!user.admin) {
            const err = {
                name: 'ListAllUsersFailed',
                message: 'User must be admin',
                statusCode: 400,
                description: 'User must be admin to list all users',
            };

            throw new ErrorHandler(err);
        }

        const users = this.usersRepository.list();
        return users;
    }
}

export { ListAllUsersUseCase };
