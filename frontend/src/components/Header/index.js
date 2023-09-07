import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaPowerOff,
  FaUser,
  FaUserPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { useSelector, useDispatch } from 'react-redux';
import history from '../../services/history';

import { Nav, StyledBurger, Ul } from './styled';

import LogoImg from '../../assets/img/logo.png';

import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());

    history.push('/login');
  };

  return (
    <Nav>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <FaBars size={24} />
        <Ul open={open}>
          <li>
            <FaTimes id="FaTimes" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auma">AUMA</Link>
          </li>
          <li>
            <Link to="/autismo">Autismo</Link>
          </li>
          <li>
            <Link to="/midia">Mídia</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/contas">Prestação de Contas</Link>
          </li>
        </Ul>
      </StyledBurger>

      <a href="https://pt-br.facebook.com/auma.piracicaba" target="_blank" id="FaFacebook">
        <FaFacebookF size={24} data-tip="Facebook" />
        <ReactTooltip />
      </a>

      <a href="https://www.instagram.com/aumapiracicaba" target="_blank" id="FaInstagram">
        <FaInstagram size={24} data-tip="Instagram" />
        <ReactTooltip />
      </a>

      <ul className="links1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auma">AUMA</Link>
        </li>
        <li>
          <Link to="/autismo">Autismo</Link>
        </li>
      </ul>

      <img src={LogoImg} alt="Logo" />
      <ul className="links2">
        <li>
          <Link to="/midia">Mídia</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/contas">Prestação de Contas</Link>
        </li>
      </ul>

      {isLoggedIn ? (
        <Link
          id="FaPowerOff"
          onClick={handleLogout}
          to="/logout"
          data-tip="Logout"
        >
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login" id="FaSignInAlt" data-tip="Restrito">
          <FaSignInAlt size={24} />
        </Link>
      )}

      {isLoggedIn && (
        <Link id="FaUser" to="/update" data-tip="Editar Usuário">
          <FaUser size={24} />
        </Link>
      )}

      {isLoggedIn && (
        <Link id="FaUserPlus" to="/register" data-tip="Criar Usuário">
          <FaUserPlus size={28} />
        </Link>
      )}
    </Nav>
  );
}
