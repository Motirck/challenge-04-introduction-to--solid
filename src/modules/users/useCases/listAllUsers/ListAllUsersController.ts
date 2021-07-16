import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const id = request.headers.user_id;
        const userId = { user_id: id.toString() };
        const allUsers = this.listAllUsersUseCase.execute(userId);

        return response.json(allUsers).send();
    }
}

export { ListAllUsersController };
