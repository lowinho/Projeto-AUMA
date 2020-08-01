import styled from 'styled-components';

export const MidiaContainer = styled.section`
  @media screen and (max-width: 480px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 1.5em;
      margin-bottom: 30px;
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
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 2.5em;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 1025px) {
    max-width: auto;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      padding: 50px auto;
      font-size: 2.5em;
      margin-bottom: 15px;
    }
  }
`;

export const ImageCarousel = styled.section`
  @media screen and (max-width: 480px) {
    max-width: 80%;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    border-radius: 7px;
    border: 3px solid #fff;

    div img {
      border-radius: 7px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 80%;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    border-radius: 7px;
    border: 3px solid #fff;

    div img {
      border-radius: 7px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 80%;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    border-radius: 7px;
    border: 3px solid #fff;

    div img {
      border-radius: 7px;
    }
  }

  @media screen and (min-width: 1025px) {
    max-width: 80%;
    background: #ecf8f8;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    border-radius: 7px;
    border: 3px solid #fff;

    div img {
      border-radius: 7px;
    }
  }
`;
