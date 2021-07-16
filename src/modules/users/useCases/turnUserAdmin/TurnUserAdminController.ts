import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        const id = request.params.user_id;
        const userId = { user_id: id.toString() };
        const user = this.turnUserAdminUseCase.execute(userId);

        return response.json(user).send();
    }
}

export { TurnUserAdminController };
