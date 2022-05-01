import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  Background,
  Card,
  Container,
  Content,
  Header,
  LoginButton,
} from './styles';
import LogoImage from '../../assets/logo2.png';
import NoUserImage from '../../assets/user-img.png';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const { push } = useHistory();

  function handleSignIn(): void {
    push('/signin');
  }

  return (
    <Container>
      <Header>
        <img src={LogoImage} alt="Viver bem logo" />

        <LoginButton onClick={handleSignIn}>
          <img src={NoUserImage} alt="No user" />
          Entrar / Cadastrar
        </LoginButton>
      </Header>

      <Content>
        <Background />
        <Card>
          <h1>Consulta médica com ótimos especialistas sem sair de casa.</h1>

          <div className="button-container">
            <p>Quero agendar uma consulta sem enrolação:</p>
            <Button onClick={handleSignIn}>Começar</Button>
          </div>

          <p className="sub-title">
            Agende com um especialista, são dezenas de especialidades
          </p>
        </Card>
      </Content>
    </Container>
  );
};

export default Home;
