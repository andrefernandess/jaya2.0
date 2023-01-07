import bankSlipRoutes from '@modules/bankslips/routes/bankSlip.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import userRoutes from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/rest/bankslips', bankSlipRoutes);
routes.use('/rest/users', userRoutes);
routes.use('/rest/sessions', sessionsRouter);

export default routes;
