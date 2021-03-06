import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #69b422;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #eee;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#69B422')};
  }
`;
