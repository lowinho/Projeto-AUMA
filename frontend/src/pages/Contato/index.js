import React, { useState } from 'react';

import { FaFacebook } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { Form } from './styled';
import history from '../../services/history';

import { isEmail } from 'validator';

import * as emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 50) {
      toast.error('O nome precisa ter entre 3 e 50 caracteres')
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Digite um email válido')
      formErrors = true;
    }

    if (formErrors) return;


    try {
      emailjs.sendForm(
      "gmail",
      "auma",
      "contato",
      "user_EOvJMi4bkA4Q6b4BNGB9O"
    )
    history.push('/');
    toast.success("Email enviado com sucesso");
      } catch(e) {
        console.log(e)
        history.push('/');
        toast.error("Falha no envio de Email, tente novamente mais tarde");
      }

  }


  return (
    <Form onSubmit={handleSubmit} id="contato">

      <h1>Contato</h1>

      <label>
        Nome: <br />
        <input
          type="text"
          value={nome}
          name='nome'
          onChange={e => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
      </label>

      <label>
        E-mail: <br />
        <input
          type="email"
          value={email}
          name='email'
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu email"
        />
      </label>

      <label>
        Assunto: <br />
        <input
          type="text"
          value={assunto}
          name='assunto'
          onChange={e => setAssunto(e.target.value)}
          placeholder="Assunto"
          required
        />
      </label>
      <label>
        Mensagem: <br />
        <textarea
          type="text"
          value={mensagem}
          name='mensagem'
          onChange={e => setMensagem(e.target.value)}
          placeholder="Digite a mensagem"
          required
        />
      </label>
      <button type="submit">Enviar</button>


      <p>Ou nos contate pelo facebook</p>

      <a href="https://pt-br.facebook.com/auma.piracicaba" id="FaFacebookF">
        <FaFacebook id="icon" data-tip="facebook" />
        <ReactTooltip />
      </a>
    </Form>
  );
}
