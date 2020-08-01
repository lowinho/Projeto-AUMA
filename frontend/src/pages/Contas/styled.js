import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const ContasContainer = styled.section`
  @media screen and (max-width: 480px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.5em;
      margin-bottom: 15px;
    }

    #texto {
      text-align: center;
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    #texto {
      text-align: center;
      font-size: 1em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.7em;
      margin-bottom: 15px;
    }

    #texto {
      text-align: center;
      font-size: 1em;
    }
  }

  @media screen and (min-width: 1025px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 2.5em;
      margin-bottom: 15px;
    }

    #texto {
      text-align: center;
      font-size: 1.2em;
    }
  }
`;

export const ContasSection = styled.section`
  @media screen and (max-width: 480px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 10px 21% 20px;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
    }

    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
      line-height: 1.5;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 20px auto;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
    }

    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
      line-height: 1.5;
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
  }

  @media screen and (min-width: 1025px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 10px 21% 20px;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
    }

    h1 {
    }

    p {
      font-size: 1.2em;
      line-height: 1.5;
      margin-top: 10px;
    }
  }
`;

export const ContasSection2 = styled.section`
  @media screen and (max-width: 480px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    background: #ecf8f8;
    margin: 50px auto 30px;
    text-align: center;

    h1 {
      text-align: center;
      font-size: 1.3em;
      margin: 15px auto;
    }

    p {
      font-size: 1.2em;
      line-height: 1.5;
      margin-top: 10px;
    }

    a {
      color: ${primaryColor};
    }

    a:hover {
      color: #3b5998;
    }

    #icon {
      width: 80px;
      height: 80px;
    }

    .conta {
      margin: 10px auto;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    background: #ecf8f8;
    margin: 10px auto 30px;
    text-align: center;

    h1 {
      text-align: center;
      font-size: 0.9em;
      margin: 15px auto;
    }

    p {
      font-size: 1em;
      line-height: 1.5;
      margin-top: 10px;
    }

    a {
      color: ${primaryColor};
    }

    a:hover {
      color: #3b5998;
    }

    #icon {
      width: 30px;
      height: 30px;
      margin-top: 10px;
    }

    .conta {
      margin: auto;
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-content: center;
    display: flex;

    background: #ecf8f8;
    margin: 10px auto 30px;
    text-align: center;

    h1 {
      text-align: center;
      font-size: 0.9em;
      margin: 15px auto;
    }

    p {
      font-size: 1em;
      line-height: 1.5;
      margin-top: 10px;
    }

    a {
      color: ${primaryColor};
    }

    a:hover {
      color: #3b5998;
    }

    #icon {
      width: 30px;
      height: 30px;
      margin-top: 10px;
    }

    .conta {
      margin: auto;
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 1025px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    margin: 50px auto 30px;
    text-align: center;

    h1 {
      text-align: center;
      font-size: 1.3em;
      margin: 15px auto;
    }

    p {
      font-size: 1.2em;
      line-height: 1.5;
      margin-top: 10px;
    }

    a {
      color: ${primaryColor};
    }

    a:hover {
      color: #3b5998;
    }

    #icon {
      width: 80px;
      height: 80px;
    }

    .conta {
      margin: auto;
    }
  }
`;
