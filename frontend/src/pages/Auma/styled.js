import styled from 'styled-components';

export const AumaContainer = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.5em;
      margin-bottom: 30px;
    }

    .h1 {
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    .h1 {
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 2em;
      margin-bottom: 20px;
    }

    .h1 {
      margin-top: 40px;
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
      margin-bottom: 40px;
    }

    .h1 {
      margin-top: 40px;
    }
  }
`;

export const NossoTrabalho = styled.section`
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

    h2 {
      font-size: 1.1em;
      text-align: center;
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

    h2 {
      font-size: 1.1em;
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
    h2 {
      font-size: 1.5em;
      text-align: center;
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
    h2 {
      text-align: center;
    }
  }
`;

export const AreasAtendimento = styled.section`
  @media screen and (max-width: 480px) {
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    justify-content: center;
    margin: 0 3% 30px 3%;

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

    .cards {
      width: 90%;
      height: 150px;
      border: 1px solid black;
      margin: auto;
    }

    .cards h1 {
      margin-bottom: 5px;
      font-size: 1.5em;
    }
    
    .pedagogia {
      padding: 5px;
      background: #dbfffc;
      order: 1;
    }

    .educador-fisico {
      padding: 5px;
      background: #dbfffc;
      order: 2;
    }

    .psicologia {
      padding: 5px;
      background: #dbfffc;
      font-size: 0.96em;
      order: 3;
    }

    .servico-social {
      padding: 5px;
      background: #dbfffc;
      order: 4;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    justify-content: center;
    margin: 0 2% 30px 2%;

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

    .cards {
      width: 100%;
      height: 250px;
      border: 1px solid black;
    }

    .cards h1 {
      margin-bottom: 5px;
      font-size: 1.5em;
    }

    .pedagogia {
      padding: 5px;
      background: #dbfffc;
      order: 1;
    }

    .educador-fisico {
      padding: 5px;
      background: #dbfffc;
      order: 2;
    }

    .psicologia {
      padding: 5px;
      background: #dbfffc;
      font-size: 0.96em;
      order: 3;
    }

    .servico-social {
      padding: 5px;
      background: #dbfffc;
      order: 4;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    justify-content: center;
    margin-bottom: 30px;
    margin: 0 2% 30px 2%;

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }

    .cards {
      width: 100%;
      height: 200px;
      border: 1px solid black;
    }

    .cards h1 {
      margin-bottom: 15px;
      font-size: 1.5em;
    }

    .pedagogia {
      padding: 5px;
      background: #dbfffc;
      order: 1;
    }

    .educador-fisico {
      padding: 5px;
      background: #dbfffc;
      order: 2;
    }

    .psicologia {
      padding: 5px;
      background: #dbfffc;
      font-size: 0.96em;
      order: 3;
    }

    .servico-social {
      padding: 5px;
      background: #dbfffc;
      order: 4;
    }
  }

  @media screen and (min-width: 1441px) {
    text-align: center;
    display: flex;
    grid-gap: 5px;
    justify-content: center;
    align-content: center;
    margin: 0 3% 30px 3%;

    h1 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
    }

    .cards {
      width: 300px;
      height: 250px;
      border: 1px solid black;
    }

    .cards h1 {
      margin-bottom: 5px;
    }

    .pedagogia {
      padding: 5px;
      background: #dbfffc;
      order: 1;
    }

    .educador-fisico {
      padding: 5px;
      background: #dbfffc;
      order: 2;
    }

    .psicologia {
      padding: 5px;
      background: #dbfffc;
      font-size: 0.96em;
      order: 3;
    }

    .servico-social {
      padding: 5px;
      background: #dbfffc;
      order: 4;
    }
  }
`;

export const ResumoServicos = styled.section`
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

    h2 {
      font-size: 1.1em;
      text-align: center;
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

    h2 {
      font-size: 1.1em;
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
    h2 {
      font-size: 1.5em;
      text-align: center;
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
    h2 {
      text-align: center;
    }
  }
`;