import React from 'react';
import { FaHandHoldingHeart, FaTasks } from 'react-icons/fa';
import { IoIosTrendingUp } from 'react-icons/io';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import {
  HomeContainer,
  Image,
  Principios,
  Missao,
  Visao,
  Valor,
  Video,
  NossaHistoria,
  ComoAjudar,
  Local,
} from './styled';

import AumaImg from '../../assets/img/auma.jpg';
import AumaPix from '../../assets/img/pix.png';

export default function Home() {
  return (
    <HomeContainer>
      <Image>
        <span>Olá</span>
        <p>Seja bem vindo</p>
      </Image>

      <h1>Princípios</h1>
      <Principios>
        <Missao>
          <FaTasks size={30} id="icon" /> <br />
          <span>Missão</span> <br />
          <p>
            Acompanhar e assistir pessoas com autismo e suas famílias,
            oferecendo suporte multidisciplinar, visando à redução dos níveis de
            dependência e sua integração na sociedade; além de contribuir
            para que o TEA (Transtorno do Espectro Autista) seja mais
            compreendido e derrubando os preconceitos existentes.
          </p>
        </Missao>
        <Visao>
          <IoIosTrendingUp size={30} id="icon" /> <br />
          <span>Visão</span> <br />
          <p>
            Promoção, desenvolvimento e inclusão social de crianças e adultos
            com TEA (Transtorno do Espectro Autista). Além de difundir
            conhecimento e informação sobre o tema.
          </p>
        </Visao>
        <Valor>
          <FaHandHoldingHeart size={30} id="icon" /> <br />
          <span>Valor</span> <br />
          <p>
            Lutamos contra a intolerância e o preconceito.<br />
            Somos apartidários.<br />
            Nos pautamos na ética, transparência e respeito.<br />
            Acreditamos na responsabilidade social e na solidariedade.
          </p>
        </Valor>
      </Principios>

      <Video>
        <h1>Vídeo Institucional</h1> <br />
        <iframe
          src="https://www.youtube.com/embed/UQcqimsoQwE?rel=0"
          frameBorder="5"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </Video>
      <h1>Nossa História</h1>
      <NossaHistoria>
        <p className="text-justify">
          Com a necessidade de um atendimento específico para seus filhos,
          um grupo de pais e amigos de pessoas com TEA da cidade de Piracicaba
          se uniu para criação de um serviço especializado no atendimento das
          pessoas com autismo, pois tinham que levar seus filhos para serviços
          em outras cidades. <br />
          <br />
          <br />
          O grupo fundou a Associação de Pais e Amigos dos Autistas de Piracicaba
          AUMA em 30 de junho de 1999. As instalações foram adaptadas para atender
          crianças, adolescentes, jovens e adultos com autismo e seu
          funcionamento se deu em junho de 2000.
        </p>
        <img src={AumaImg} alt="Capa 1" />
      </NossaHistoria>

      <ComoAjudar>
        <h1>Como posso ajudar?</h1>
        <img src={AumaPix} alt="PIX" />
      </ComoAjudar>

      <Local>
        <h1>Localização</h1>
        <p>
          Rua Leontino Boscariol, 70 - Morumbi, Piracicaba - SP | CEP:
          13.420-340
        </p>

        <iframe src="https://maps.google.com/maps?q=R.%20Leontino%20Boscariol%2C%2070%20-%20Morumbi%2C%20Piracicaba%20-%20SP&t=&z=17&ie=UTF8&iwloc=&output=embed" />
      </Local>
    </HomeContainer>
  );
}
