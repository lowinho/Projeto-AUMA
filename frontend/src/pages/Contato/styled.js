import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    background: ${primaryColor};
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    background: ${primaryColor};

    input,
    textarea {
      margin: 0 auto;
      width: 400px;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      text-align: center;
    }

    textarea {
      margin: 0 auto;
      width: 400px;
      height: 90px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
      text-align: center;
    }

    label {
      margin: 10px auto;
      text-align: center;
    }

    button {
      background: #fff;
      color: ${primaryColor};
      width: 200px;
      margin: 30px auto 0;
      transition: 0.8;
      margin-bottom: 50px;
    }

    button:hover {
      filter: brightness(0.9);
    }

    p {
      margin: 30px auto;
    }

    a {
      color: #fff;
      transition: 0.8s;
      width: 60px;
      margin: auto;
      text-align: center;
      align-content: center;
    }

    #icon {
      width: 35px;
      height: 35px;
    }

    #icon:hover {
      filter: brightness(0.1);
    }
    h1 {
      text-align: center;
      margin: 30px auto;
    }

    div {
      text-align: center;
    }

    div a {
      margin: 0 15px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1040px) {
    max-width: 100%;

    align-content: center;
    background: ${primaryColor};
    margin: 0px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    background: ${primaryColor};

    input {
      margin-bottom: 20px;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    textarea {
      margin-bottom: 20px;
      height: 100px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
    button {
      background: #fff;
      color: ${primaryColor};
      width: 200px;
      margin: 30px auto 0;
      transition: 0.8;
      margin-bottom: 50px;
    }

    button:hover {
      filter: brightness(0.9);
    }

    p {
      margin: 30px auto;
    }

    a {
      color: #fff;
      transition: 0.8s;
      width: 60px;
      margin: auto;
      text-align: center;
      align-content: center;
    }

    #icon {
      width: 40px;
      height: 40px;
    }

    #icon:hover {
      filter: brightness(0.1);
    }
    h1 {
      text-align: center;
      margin: 30px auto;
    }

    input,
    textarea {
      width: 700px;

      margin: 0 auto;
    }
    label {
      margin: 10px auto;
    }

    div {
      text-align: center;
    }

    div a {
      margin: 0 15px;
    }
  }

  @media screen and (min-width: 1041px) {
    max-width: 100%;
    align-content: center;
    background: ${primaryColor};
    margin: 0px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: white;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    background: ${primaryColor};

    input {
      margin-bottom: 20px;
      height: 40px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    textarea {
      margin-bottom: 20px;
      height: 100px;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
    button {
      background: #fff;
      color: ${primaryColor};
      width: 200px;
      margin: 30px auto 0;
      transition: 0.8;
      margin-bottom: 50px;
    }

    button:hover {
      filter: brightness(0.7);
    }

    p {
      margin: 30px auto;
    }

    a {
      color: #fff;
      transition: 0.8s;
      width: 60px;
      margin: auto;
      text-align: center;
      align-content: center;
    }

    #icon {
      width: 50px;
      height: 50px;
    }

    #icon:hover {
      filter: brightness(0.1);
    }
    h1 {
      text-align: center;
      margin: 30px auto;
    }

    input,
    textarea {
      width: 700px;
      margin: 0 auto;
    }
    label {
      margin: 10px auto;
    }

    div {
      text-align: center;
    }

    div a {
      margin: 0 15px;
    }
  }
`;
