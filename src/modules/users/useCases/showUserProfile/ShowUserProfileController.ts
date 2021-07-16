import { Request, Response } from 'express';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        const id = request.params.user_id;
        const userId = { user_id: id.toString() };
        const user = this.showUserProfileUseCase.execute(userId);

        return response.json(user).send();
    }
}

export { ShowUserProfileController };
