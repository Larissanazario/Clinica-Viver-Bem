import { shade } from 'polished';
import styled from 'styled-components';
import HomeBackground from '../../assets/home-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.header`
  z-index: 999;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  width: 100%;
  height: 120px;
`;

export const LoginButton = styled.button`
  border-radius: 16px;
  background-color: #f0f0f0;
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;

  &:hover {
    background: ${shade(0.05, '#f0f0f0')};
  }

  img {
    height: 32px;
    width: 32px;
  }
`;

export const Content = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: url(${HomeBackground}) no-repeat center;
  background-size: cover;
`;

export const Card = styled.div`
  width: 50%;
  position: absolute;
  top: 38%;
  left: 5%;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 24px;

  & .button-container {
    display: flex;
    align-items: center;
    margin-top: 16px;

    button {
      height: 40px;
      margin: 0 0 0 16px;
      width: 20%;
    }
  }

  & .sub-title {
    margin-top: 32px;
    color: #7dd328;
  }
`;
