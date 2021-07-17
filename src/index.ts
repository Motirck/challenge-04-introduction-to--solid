import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { errorInterceptor } from './middlewares/errorInterceptor';
import { usersRoutes } from './routes/users.routes';
import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/users', usersRoutes);

// Call Middleware
app.use(errorInterceptor);

export { app };
