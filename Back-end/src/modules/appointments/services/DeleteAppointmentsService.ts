import { inject, injectable } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  appointment_id: string;
}

@injectable()
class DeleteAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ appointment_id }: IRequest): Promise<boolean> {
    const appointmentDeleted = await this.appointmentsRepository.deleteAppointment(
      appointment_id,
    );

    return appointmentDeleted;
  }
}

export default DeleteAppointmentService;
