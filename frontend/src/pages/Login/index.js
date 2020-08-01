import React, { useState, } from 'react';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Form, FormContainer, Container } from './styled';

import * as authActions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 30) {
      toast.error('O Nome precisa ter entre 3 e 30 caracteres');
      formErrors = true;
    }

    if (password.length < 6 || password.length > 12) {
      toast.error('A senha precisa ter entre 6 e 12 caracteres');
      formErrors = true;
    }

    if (formErrors) return;
    // console.log('enviado');
    dispatch(authActions.loginRequest({ nome, password, prevPath }));
  }

  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Seu nome"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
          <button type="submit">Acessar</button>
        </Form>
      </FormContainer>
    </Container>
  );
}
