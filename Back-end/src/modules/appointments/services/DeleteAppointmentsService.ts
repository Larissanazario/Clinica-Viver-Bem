import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { inject, injectable } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  appointment_id: string;
  user_id: string;
}

@injectable()
class DeleteAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    appointment_id,
    user_id,
  }: IRequest): Promise<boolean> {
    const appointmentDeleted = await this.appointmentsRepository.deleteAppointment(
      appointment_id,
    );

    if (appointmentDeleted) {
      await this.cacheProvider.invalidate(`appointments-list:${user_id}`);
    }

    return appointmentDeleted;
  }
}

export default DeleteAppointmentService;
