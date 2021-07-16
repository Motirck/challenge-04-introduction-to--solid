import express from 'express';

import { errorInterceptor } from './middlewares/errorInterceptor';
import { usersRoutes } from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);

// Call Middleware
app.use(errorInterceptor);

export { app };
