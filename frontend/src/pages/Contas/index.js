import React from 'react';

import { FaBook, FaCoins, FaHotel, FaBookOpen } from 'react-icons/fa';

// eslint-disable-next-line import/no-unresolved
import { ContasContainer, ContasSection, ContasSection2 } from './styled';

export default function Auma() {
  return (
    <ContasContainer>
      <br />
      <br />
      <br />
      <h1>Palavras do Presidente</h1>
      <ContasSection>
        <p className="text-justify">
          Baseados nos princípios de Respeito e Transparência aos nossos
          parceiros, nós da AUMA ressaltamos a importância da divulgação de
          nossos Demonstrativos Financeiros, no intuito de mantê-los informados
          das nossas vitórias, bem como das nossas necessidades, como uma forma
          de satisfação das nossas ações em prol do Autismo.
          <br /> <br /> A página apresenta dados, informações e demonstrativos
          sobre a execução orçamentária de cada exercício fiscal, nos termos da
          Lei Nª 7.825, de 13/12/2013 e Decreto 15.474/14 que Obriga as
          Organizações Não Governamentais - ONGs, Associações e Cooperativas a
          divulgarem suas ações e prestações de contas, na página da internet,
          quando recebem, a qualquer título, dinheiro, bens e valores públicos
          ou pela qual o Município de Piracicaba, ou que, em nome deste, assuma
          obrigações de natureza pecuniária.
          <br /> <br /> A prestação de contas é um dever das entidades e o
          acesso irrestrito às mesmas é um direito do cidadão, dualidade que se
          constitui num dos principais sustentáculos do exercício da democracia.
          <br /> <br /> A entidade, ao conferir transparência aos seus atos, dão
          demonstração inequívoca de seu compromisso com a cidade e seus
          cidadãos.
        </p>
      </ContasSection>
      <hr />
      <h1>Documentação</h1>
      <p id="texto">
        Você pode acessar nossos arquivos para download clicando nos ícones
        abaixo.
      </p>
      <ContasSection2>
        <div className="estatuto conta">
          <a
            href="https://drive.google.com/drive/folders/1134_0h_3m9IQVKTzH3kyYftHIM5TwgPv?usp=sharing"
            id="FaFacebookF"
          >
            <FaBook id="icon" />
          </a>
          <h1>Estatuto e Ata</h1>
        </div>

        <div className="contas conta">
          <a
            href="https://drive.google.com/drive/folders/1deS4rZGCmOL5abLLkCZ7HnaBoSp1iqHs?usp=sharing"
            id="FaFacebookF"
          >
            <FaCoins id="icon" />
          </a>
          <h1>Prestação de Contas</h1>
        </div>

        <div className="balanco conta">
          <a
            href="https://drive.google.com/drive/folders/1p_T27mdBtdm2N7btAc4R7HasmvRevZCB?usp=sharing"
            id="FaFacebookF"
          >
            <FaHotel id="icon" />
          </a>
          <h1>Balanço Patrimonial</h1>
        </div>

        <div className="certidoes conta">
          <a
            href="https://drive.google.com/drive/folders/1aDqxqd1W5hbUIcoxQCNBlTk7JJsBO_9A?usp=sharing"
            id="FaFacebookF"
          >
            <FaBookOpen id="icon" />
          </a>
          <h1>Certidões</h1>
        </div>
      </ContasSection2>
    </ContasContainer>
  );
}
