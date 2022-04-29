import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: flex;
  height: 34px;
  margin: 10px 46px 0 46px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    width: 60px;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4ede8;
    border: 2px solid #69b422;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 2px;
    background-color: #69b422;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #69b422;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: #f4ede8;
    left: 2px;
  }

  h2 {
    margin-left: 72px;
    color: #69b422;
  }
`;
