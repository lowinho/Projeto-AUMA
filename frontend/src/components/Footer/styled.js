import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Foot = styled.div`
  @media screen and (max-width: 680px) {
    background: #14213d;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px;
    justify-content: center;
    text-align: center;

    a {
      color: #778da9;
      transition: 0.8;
      text-align: center;
      margin: auto;
    }

    a:hover {
      color: ${primaryColor};
    }

    span {
      color: #778da9;
      text-transform: uppercase;
      font-weight: bold;
    }
    li {
      text-transform: uppercase;
      margin: 10px auto;
      text-align: center;
    }

    p {
      text-align: center;
    }

    .div {
      color: #778da9;
      text-align: center;
      margin: 10px auto;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 784px) {
    background: #14213d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    a {
      color: #778da9;
      margin: auto;
      transition: 0.8;
      text-align: center;
    }

    a:hover {
      color: ${primaryColor};
    }

    span {
      color: #778da9;
      text-transform: uppercase;
      font-weight: bold;
    }
    li {
      text-transform: uppercase;
    }

    .div {
      color: #778da9;
      margin: 50px auto;
      text-align: center;
      align-content: center;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 785px) and (max-width: 1040px) {
    background: #14213d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    a {
      color: #778da9;
      margin: auto;
      transition: 0.8;
      text-align: center;
    }

    a:hover {
      color: ${primaryColor};
    }

    span {
      color: #778da9;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.3;
    }
    li {
      text-transform: uppercase;
    }

    .div {
      color: #778da9;
      margin: 50px auto;
      text-align: center;
      align-content: center;
      line-height: 1.5;
    }
  }
  @media screen and (min-width: 1025px) {
    background: #14213d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    a {
      color: #778da9;
      margin: 0 10px 0 0;
      transition: 0.8;
    }

    a:hover {
      color: ${primaryColor};
    }

    span {
      color: #778da9;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.3;
    }
    li {
      text-transform: uppercase;
    }

    a {
      text-align: center;
      margin: auto;
    }

    .div {
      color: #778da9;
      margin: 50px auto;
      text-align: center;
      align-content: center;
      line-height: 1.5;
    }
  }
`;
