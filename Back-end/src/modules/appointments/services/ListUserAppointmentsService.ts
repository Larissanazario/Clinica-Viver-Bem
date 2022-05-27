import { inject, injectable } from 'tsyringe';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListUserAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllAppointments({
      user_id,
    });

    return appointments;
  }
}

export default ListUserAppointmentsService;
