import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  ul {
    margin: 0 auto;
  }

  a {
    color: #fff;
  }

  a:hover {
    color: #3b5998;
  }

  #FaTimes {
    color: #fff;
    transition: 0.8;
    text-align: right;
  }

  #FaTimes:hover {
    color: red;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 350px;
    width: 200px;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media (min-width: 769px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    img {
      width: 5%;
      height: 5%;
      margin: 3px auto;
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .links1 {
      display: none;
      text-align: left;
    }

    .links2 {
      display: none;
      text-align: right;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 10px 20px;
    display: flex;
    justify-content: left;

    img {
      width: 22%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    #FaFacebookF {
      color: #3b5998;
      margin: auto;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
      position: absolute;
      top: 10px;
      left: 30px;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      margin: auto;
      transition: 0.8s;
      position: absolute;
      top: 15px;
      left: 70px;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      margin: auto;
      transition: 0.8s;
      position: absolute;
      top: 15px;
      left: 70px;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      margin: auto;
      transition: 0.8s;
      position: absolute;
      top: 15px;
      left: 110px;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      top: 13px;
      left: 150px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: none;
    }

    .links2 {
      display: none;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1040px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px;

    img {
      width: 15%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 1;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 10px 0 0;
      transition: 0.6s;
      font-size: 0.77em;
      font-weight: bold;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: inline;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 0px;
      top: 13px;
      right: 95px;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 35px;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 5px;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 35px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 60px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 200px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 100px 0 0;
    }
  }

  /* @media screen and (min-width: 931px) and (max-width: 1040px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 5px;
      font-weight: bold;
      transition: 0.6s;
      font-size: 0.9em;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: inline;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 30px;
      right: 35px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 200px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 100px 0 0;
    }
  } */
  /* @media screen and (min-width: 1025px) and (max-width: 1040px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 5px;

      transition: 0.8s;
      font-size: 0.7em;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 10px;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 40px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 70px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 200px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 100px 0 0;
    }
  } */

  @media screen and (min-width: 1041px) and (max-width: 1280px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 5px;
      font-weight: bold;
      transition: 0.8s;
      font-size: 0.9em;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 10px;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 40px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 70px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 200px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 100px 0 0;
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 1500px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 30px;
      font-weight: bold;
      transition: 0.8s;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 20px;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 50px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 80px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 200px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 100px 0 0;
    }
  }
  @media screen and (min-width: 1501px) and (max-width: 1700px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 30px;
      font-weight: bold;
      transition: 0.8s;
    }

    a:hover {
      color: ${primaryColor};
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 100px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 0px;
      right: 140px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 300px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 200px 0 0;
    }
  }
  @media screen and (min-width: 1701px) {
    background: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px;

    img {
      width: 10%;
      height: 10%;
      position: absolute;
      margin: 3px auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 80%;
    }
    a {
      color: #3b5998;
      margin: 0 30px;
      font-weight: bold;
      transition: 0.8s;
    }

    a:hover {
      color: ${primaryColor};
    }

    a:focus {
      color: #fff;
      background: ${primaryColor};
      border-radius: 7px;
      font-weight: bold;
    }

    ul {
      list-style: none;
    }

    li {
      display: inline;
      margin: auto;
    }

    .buttonMob {
      display: none;
    }

    #FaFacebookF {
      color: #3b5998;
      position: absolute;
      margin: auto 60px;
      left: 0;
      border-radius: 30%;
      background: #fff;
      transition: 0.8s;
      padding: 3px 0 0px 0;
    }

    #FaSignInAlt {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaPowerOff {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 0;
      transition: 0.8s;
    }

    #FaUser {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 60px;
      right: 50px;
      transition: 0.8s;
    }

    #FaUserPlus {
      color: #3b5998;
      background: #fff;
      position: absolute;
      margin: auto 30px;
      right: 130px;
      transition: 0.8s;
    }

    #FaFacebookF:hover,
    #FaSignInAlt:hover,
    #FaPowerOff,
    #FaUser,
    #FaUserPlus {
      color: ${primaryColor};
      background: #fff;
    }

    .links1 {
      display: inline;
      text-align: left;
      margin: 0 0 0 400px;
    }

    .links2 {
      display: inline;
      text-align: right;
      margin: 0 300px 0 0;
    }
  }
`;
