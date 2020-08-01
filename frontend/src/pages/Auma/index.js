import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { AumaContainer, AumaSection, AumaSection2 } from './styled';

import Img1 from '../../assets/img/nosso_trabalho.jpg';

export default function Auma() {
  return (
    <AumaContainer>
      <br />
      <br />
      <br />
      <h1>Sobre a AUMA</h1>
      <AumaSection>
        <div className="texto">
          <h2>Nosso Trabalho</h2>
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
        </div>
        <img src={Img1} alt="Capa 1" />
      </AumaSection>
      <hr />
      <h1 id="h1">Oferecendo atendimentos nas áreas</h1>
      <AumaSection2>
        <div className="pedagogia cards">
          <h1>Pedagogia</h1>
          <p>
            Trabalhar com pequenos grupos em sala de aula promovendo o
            acolhimento, estimulação global, comunicação e orientação para os
            comportamentos aceitos socialmente.
          </p>
        </div>
        <div className="terapia cards">
          <h1>Terapia Ocupacional</h1>
          <p>
            Desenvolver habilidades motoras através de atividades do dia a dia
            promovendo a independência. Fazer uso da arte com visão terapêutica
            e enfoque educacional.
          </p>
        </div>
        <div className="fono cards">
          <h1>Fonoaudiologia</h1>
          <p>Desenvolver a mastigação, deglutição e comunicação.</p>
        </div>
        <div className="educador cards">
          <h1>Educador Físico</h1>
          <p>
            Oferecer a socialização do autista através das atividades lúdicas e
            esportivas, proporcionando benefícios gerais, como capacidade de
            união e apego, empatia, comunicação e limites.
          </p>
        </div>
        <div className="psicologia cards">
          <h1>Psicologia</h1>
          <p>
            Atendimentos individualizados com os assistidos, a fim de aliviar
            ansiedades características da síndrome, trabalho sócio-educativo com
            orientação a família e apoio com aconselhamento às pedagogas sobre o
            manejo e construção de comportamentos.
          </p>
        </div>
        <div className="servico cards">
          <h1>Serviço Social</h1>
          <p>
            Promover acolhimento e orientação familiar, por meio atendimento
            psicossocial, visitas domiciliares, entrevistas individuais,
            acompanhamento em grupos sócio-educativo e de capacitação.
          </p>
        </div>
      </AumaSection2>
    </AumaContainer>
  );
}
