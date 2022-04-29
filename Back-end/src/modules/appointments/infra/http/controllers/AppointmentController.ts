import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ListUserAppointmentsService from '@modules/appointments/services/ListUserAppointmentsService';
import DeleteAppointmentService from '@modules/appointments/services/DeleteAppointmentsService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }

  public async findAllUserAppointments(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;

    const listUserAppointmentsService = container.resolve(
      ListUserAppointmentsService,
    );

    const appointments = await listUserAppointmentsService.execute({
      user_id,
    });

    return response.json(appointments);
  }

  public async deleteAppointment(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const user_id = request.user.id;
    const { appointment_id } = request.body;

    const deleteAppointmentService = container.resolve(
      DeleteAppointmentService,
    );

    const appointmentDeleted = await deleteAppointmentService.execute({
      appointment_id,
      user_id,
    });

    return response.json(appointmentDeleted);
  }
}
