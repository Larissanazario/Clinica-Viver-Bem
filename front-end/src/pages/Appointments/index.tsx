import { Link, useHistory } from 'react-router-dom';
import { FiCalendar, FiClock, FiPower, FiTrash2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import {
  AppointmentListHeader,
  AppointmentsList,
  Container,
  Content,
  Header,
  HeaderContent,
  Profile,
} from './styles';
import logoImg from '../../assets/logo2.png';
import avatarImg from '../../assets/avatar-clynic.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Button from '../../components/Button';

export interface Provider {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: boolean;
  avatar_url: string;
}

export interface Appointment {
  id: string;
  date: string;
  provider: Provider;
}

const Appointments: React.FC = () => {
  const { user, signOut } = useAuth();
  const { addToast } = useToast();
  const { push } = useHistory();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Appointment[]>('/appointments');

      setAppointments(data);
    })();
  }, []);

  async function handleDeleteAppointment(
    appointment_id: string,
  ): Promise<void> {
    try {
      const appointmentDeleted = await api.delete('/appointments', {
        data: { appointment_id },
      });

      if (appointmentDeleted) {
        addToast({
          type: 'success',
          title: 'Agendamento deletado com sucesso!',
        });
        setAppointments(prev =>
          prev.filter(appointment => appointment.id !== appointment_id),
        );
      }
    } catch (error) {
      addToast({
        type: 'success',
        title: 'Ops, algo deu errado :(',
        description: (error as Error).message,
      });
    }
  }

  function handleAddAppointment(): void {
    push('/providers');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Viver Bem Logo" />

          <Profile>
            <Link to="/profile">
              <img src={user.avatar_url || avatarImg} alt={user.name} />
            </Link>
            <div>
              <span>Bem-vindo(a),</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <AppointmentListHeader>
          <h1>Agendamentos</h1>
          <Button onClick={handleAddAppointment}>Agendar consulta</Button>
        </AppointmentListHeader>

        {appointments.length === 0 && <p>Você não possui nenhum agendamento</p>}

        <AppointmentsList>
          {appointments.map(({ provider, ...appointment }) => (
            <div key={appointment.id} id="appointment">
              <img src={provider.avatar_url || avatarImg} alt={provider.name} />
              <strong>{provider.name}</strong>
              <div>
                <span>
                  <FiCalendar />
                  <strong>
                    {format(parseISO(appointment.date), 'dd/MM/yyyy')}
                  </strong>
                </span>
                <span>
                  <FiClock />
                  <strong>{format(parseISO(appointment.date), 'HH:mm')}</strong>
                </span>
              </div>
              <div>
                <span>
                  <FiTrash2
                    className="delete-icon"
                    onClick={() => handleDeleteAppointment(appointment.id)}
                  />
                </span>
              </div>
            </div>
          ))}
        </AppointmentsList>
      </Content>
    </Container>
  );
};

export default Appointments;
