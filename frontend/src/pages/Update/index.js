import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import { get } from 'lodash';
import history from '../../services/history';


import { Form, FormContainer, Container } from './styled';
import * as actions from '../../store/modules/auth/actions';
import PropTypes from 'prop-types';

export default function Update({match}) {
  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const userId = localStorage.getItem("userId");
  const id = userId;

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };

  useEffect(() => {

    if (!id) return;

    async function getData() {
      try {
        const { data } = await axios.get(`/users/${id}`);
        setNome(data.nome);
        setEmail(data.email);
        setPassword();

      } catch (err) {
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map(error => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [
    setNome,
    setEmail,
    setPassword,
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }


    if (formErrors) return;

    try {
      await axios.put(`/users/${id}`, {
        nome,
        email,
        password,

    });
      toast.success('Usuário Editado com sucesso!');
      console.log('deu')
      history.push('/');

} catch(err) {
      console.log(err)
      toast.error('Erro ao editar usuário!');
      history.push('/update');
}


  }

  return (
    <Container>
      <FormContainer>
        <h1>Editar dados</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </label>

          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Seu e-mail"
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Sua senha"
            />
          </label>

          <button type="submit" >Salvar</button>
        </Form>
      </FormContainer>
    </Container>
  );
}

Update.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
