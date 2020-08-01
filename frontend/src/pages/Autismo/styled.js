import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const AutismoContainer = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;

    h1 {
      padding: 10px auto;
      font-size: 1.5em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 10px auto;
      font-size: 1.5em;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 10px auto;
      font-size: 2em;
    }
  }

  @media screen and (min-width: 1441px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 2.5em;
      margin-bottom: 25px;
    }
  }
`;

export const AutismoSection = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    background: #ecf8f8;
    margin: 10px;
    flex-direction: column;

    img {
      width: 90%;
      height: 400px;
      box-shadow: 0 2px 0px;
      margin: auto 5%;
    }

    p {
      font-size: 1em;
      text-align: center;
      margin: 3% auto;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    background: #ecf8f8;
    flex-direction: column;
    margin: 10px 2%;

    img {
      width: 90%;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: 2% auto;
    }

    p {
      font-size: 1.2em;
      margin: auto;
      text-align: center;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    margin: 10px 5%;

    img {
      width: 500px;
      height: 500px;
      box-shadow: 0 2px 0px;
      margin: auto 0 auto 2%;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin-top: 5px;
      margin: 0% auto;
    }
  }

  @media screen and (min-width: 1441px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    margin: 10px 15%;

    img {
      width: 500px;
      height: 500px;
      box-shadow: 0 2px 0px;
      margin: auto 25px auto 2%;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin: auto;
    }
  }
`;

export const AutismoSection2 = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    background: #ecf8f8;
    margin: 10px;
    flex-direction: column;

    img {
      width: 90%;
      height: 400px;
      box-shadow: 0 2px 0px;
      margin: auto 5%;
    }

    p {
      font-size: 1em;
      text-align: center;
      margin: 3% auto;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    background: #ecf8f8;

    margin: 10px 2%;

    img {
      width: 90%;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: 2% auto;
    }

    p {
      font-size: 1.2em;
      margin: auto;
      text-align: center;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    margin: 10px 5%;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: auto 2% auto 0;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin: auto;
    }
  }

  @media screen and (min-width: 1441px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    margin: 10px 15%;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: auto 2% auto 25px;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin: auto;
    }
  }
`;
