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
  Objetivo,
  Local,
} from './styled';

import AumaImg from '../../assets/img/auma.jpg';

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
            dependência e sua integração na sociedade e contribuir para que o
            TEA (Transtorno do Espectro Autista) seja mais compreendida e
            derrubando os preconceitos existentes.
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
            Promover o respeito e integração social aos autistas e seus
            familiares, ética e desempenho no trabalho executado para alcançar a
            eficácia e eficiência, sempre atuando com responsabilidade.
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
      <h1>Objetivo</h1>
      <Objetivo>
        <p>
          Contribuir para que a sociedade compreenda melhor o que é o autismo,
          acolhendo e derrubando os preconceitos existentes. <br />
          <br />
          <br />
          Atender crianças, adolescentes, jovens e adultos com diagnóstico
          fechado, estabelencendo uma relação baseada em controle, segurança,
          confiança e amor, facilitando-lhes a compreensão e assimilação de
          conceitos básicos para que possam participar em sociedade com melhor
          qualidade de vida. <br />
          <br />
          <br />
          Conscientizar e trabalhar com a família para refletir, descobrir,
          aceitar e assumir seu papel junto ao autista.
        </p>
        <img src={AumaImg} alt="Capa 1" />
      </Objetivo>

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
