import { Router } from 'express';
import bankSlipsController from '../controllers/BankslipsController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/middlewares/isAuthenticated';

const bankSlipRoutes = Router();
const controller = new bankSlipsController();

bankSlipRoutes.get('/', isAuthenticated, controller.get);
bankSlipRoutes.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  controller.getById,
);

bankSlipRoutes.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      due_date: Joi.string()
        .required()
        .message(' Invalid bankslip provided. Due date is required'),
      total_in_cents: Joi.number()
        .required()
        .message(' Invalid bankslip provided. Total in cents is required'),
      customer: Joi.date()
        .required()
        .message(' Invalid bankslip provided. Customer is required'),
    },
  }),
  controller.create,
);

bankSlipRoutes.put(
  '/:id/payments',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      payment_date: Joi.date().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  controller.pay,
);

bankSlipRoutes.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  controller.cancel,
);

export default bankSlipRoutes;
