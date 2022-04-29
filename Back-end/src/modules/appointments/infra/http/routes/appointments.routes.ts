import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AppointmentsController from '../controllers/AppointmentController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointments = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

appointmentsRouter.get('/', appointmentsController.findAllUserAppointments);
appointmentsRouter.get('/me', providerAppointments.index);

appointmentsRouter.delete(
  '/',
  celebrate({
    [Segments.BODY]: {
      appointment_id: Joi.string().uuid().required(),
    },
  }),
  appointmentsController.deleteAppointment,
);

export default appointmentsRouter;
