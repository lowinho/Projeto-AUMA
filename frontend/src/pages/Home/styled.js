import styled from 'styled-components';
import { primaryColor } from '../../config/colors';
import MainImage from '../../assets/img/foto1.jpg';

export const HomeContainer = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 20px auto;
      font-size: 1.5em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 20px auto;
      font-size: 2em;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 20px auto;
      font-size: 2em;
    }
  }

  @media screen and (min-width: 1441px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      margin: 20px auto;
      font-size: 2.5em;
    }
  }
`;

export const Image = styled.div`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    background-image: url(${MainImage});
    background-size: cover;
    width: 90%;
    height: 300px;
    color: #80ffdb;
    font-weight: bold;
    border: 3px solid #fff;

    span {
      font-size: 2em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    p {
      font-size: 1.5em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    img {
      width: 15%;
      height: 15%;
      background: blueviolet;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    background-image: url(${MainImage});
    background-size: cover;
    width: 100%;
    height: 90vh;
    color: #80ffdb;
    font-weight: bold;

    span {
      font-size: 3em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    p {
      font-size: 2em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    img {
      width: 15%;
      height: 15%;
      background: blueviolet;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    background-image: url(${MainImage});
    background-size: cover;
    width: 100%;
    height: 100vh;
    color: #80ffdb;
    font-weight: bold;

    span {
      font-size: 4em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    p {
      font-size: 3em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    img {
      width: 15%;
      height: 15%;
      background: blueviolet;
    }
  }

  @media screen and (min-width: 1441px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    background-image: url(${MainImage});
    background-size: cover;
    width: 100%;
    height: 100vh;
    color: #80ffdb;
    font-weight: bold;

    span {
      font-size: 5em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    p {
      font-size: 4em;
      text-shadow: black 0.1em 0.1em 0.2em;
    }

    img {
      width: 15%;
      height: 15%;
      background: blueviolet;
    }
  }
`;

export const Principios = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    background: #ecf8f8;
    text-align: center;
    flex-direction: column;
    margin: 30px auto;

    #icon {
      color: ${primaryColor};
      margin-top: 5px;
      margin-bottom: 12px;
    }

    span {
      font-size: 1;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 10px;
      font-size: 1.4em;
    }

    p {
      margin-top: 10px;
      font-size: 1em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    background: #ecf8f8;
    text-align: center;
    justify-content: space-between;
    margin: 30px 1%;

    #icon {
      color: ${primaryColor};
      margin-top: 5px;
      margin-bottom: 12px;
    }

    span {
      font-size: 1;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 10px;
      font-size: 1.4em;
    }

    p {
      margin-top: 10px;
      font-size: 1em;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    display: flex;
    background: #ecf8f8;
    text-align: center;
    justify-content: space-between;
    margin: 30px 5%;

    #icon {
      color: ${primaryColor};
      margin-top: 5px;
      margin-bottom: 12px;
    }

    span {
      font-size: 1;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 10px;
      font-size: 1.4em;
    }

    p {
      margin-top: 10px;
      font-size: 1.1em;
    }
  }

  @media screen and (min-width: 1441px) {
    display: flex;
    background: #ecf8f8;
    text-align: center;
    justify-content: space-between;
    margin: 30px 15%;

    #icon {
      color: ${primaryColor};
      margin-top: 5px;
      margin-bottom: 12px;
    }

    span {
      font-size: 1;
      font-weight: bold;
      color: ${primaryColor};
      margin-bottom: 10px;
      font-size: 1.6em;
    }

    p {
      margin-top: 10px;
      font-size: 1.2em;
    }
  }
`;

export const Missao = styled.div`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin: 5px auto;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 90%;
    background: #fff;
    padding: 15px auto;
    line-height: 1.5;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1441px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }
`;

export const Visao = styled.div`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin: 5px auto;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 90%;
    background: #fff;
    padding: 15px auto;
    line-height: 1.5;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1441px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }
`;

export const Valor = styled.div`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin: 5px auto;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 90%;
    background: #fff;
    padding: 15px auto;
    line-height: 1.5;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1441px) {
    margin: 5px;
    text-align: center;
    box-shadow: 0 1px 5px;
    width: 30%;
    background: #fff;
    padding: 15px 10px;
    line-height: 1.5;
  }
`;

export const Video = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-content: center;
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-bottom: 100px;
  iframe {
    width: 90%;
    height: 300px
    margin: 0 auto;
  }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-content: center;
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-bottom: 100px;
  iframe {
    width: 73%;
    height: 455px
    margin: 0 auto;
  }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
  align-content: center;
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-bottom: 100px;
  iframe {
    width: 65%;
    height: 555px
    margin: 0 auto;
  }
  }

  @media screen and (min-width: 1441px) {
    align-content: center;
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-bottom: 100px;
  iframe {
    width: 70%;
    height: 665px
    margin: 0 auto;
  }
`;

export const Objetivo = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    background: #ecf8f8;
    margin: 10px;

    img {
      width: 90%;
      height: 300px;
      box-shadow: 0 2px 10px;
      margin: auto 0 auto 2%;
    }

    p {
      font-size: 1em;
      margin-top: 5px auto;
      text-align: center;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-content: center;
    display: flex;
    flex-direction: column;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 10px 5%;

    img {
      width: 88%;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: 10% 0 10% 0;
    }

    p {
      font-size: 1.1em;
      line-height: 2;
      margin: 5% 2% 5% 0;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 10px 5%;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: auto;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin: 5px 2% 5% 0;
    }
  }

  @media screen and (min-width: 1441px) {
    align-content: center;
    display: flex;
    background: #ecf8f8;
    justify-content: space-between;
    margin: 10px 15%;

    img {
      width: 445px;
      height: 500px;
      box-shadow: 0 2px 10px;
      margin: auto 0 auto 2%;
    }

    p {
      font-size: 1.2em;
      line-height: 2;
      margin-top: 5px;
      margin: 1% auto;
    }
  }
`;

export const Local = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-content: center;
    display: flex;
    background: #fff;
    flex-direction: column;
    padding-bottom: 100px;
    justify-content: center;

    iframe {
      width: 90%;
      height: 245px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 2px 10px;
    }

    p {
      text-align: center;
      margin: 10px;
      font-size: 1em;
    }

    h1 {
      font-size: 1.5em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-content: center;
    display: flex;
    background: #fff;
    flex-direction: column;
    padding-bottom: 100px;
    justify-content: center;

    iframe {
      width: 80%;
      height: 285px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 2px 10px;
    }

    p {
      text-align: center;
      margin: 10px;
    }

    h1 {
      font-size: 2em;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    align-content: center;
    display: flex;
    background: #fff;
    flex-direction: column;
    padding-bottom: 100px;
    justify-content: center;

    iframe {
      width: 70%;
      height: 305px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 2px 10px;
    }

    p {
      text-align: center;
      margin: 10px;
    }

    h1 {
      font-size: 2em;
    }
  }

  @media screen and (min-width: 1441px) {
    align-content: center;
    display: flex;
    background: #fff;
    flex-direction: column;
    padding-bottom: 100px;
    justify-content: center;

    iframe {
      width: 70%;
      height: 345px;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 2px 10px;
    }

    p {
      text-align: center;
      margin: 10px;
    }
  }
`;

/* @media screen and (max-width: 480px) {
}

@media screen and (min-width: 481px) and (max-width: 768px) {
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
} */

/* @media screen and (min-width: 1025px) and (max-width: 1440px) {
}

@media screen and (min-width: 1441px) {
} */
