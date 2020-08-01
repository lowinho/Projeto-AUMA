import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Paragrafo = styled.p`
  font-size: 80px;
`;

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  button {
    background: white;
    color: ${primaryColor};
  }
`;

export const FormContainer = styled.section`
  width: 600px;
  height: 400px;
  background: ${primaryColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;

  h1 {
    text-align: center;
  }
`;
