import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { AumaContainer, NossoTrabalho, AreasAtendimento, ResumoServicos } from './styled';

import Img1 from '../../assets/img/nosso_trabalho.jpg';
import Img2 from '../../assets/img/autismo1.jpg';

export default function Auma() {
  return (
    <AumaContainer>
      <br />
      <br />
      <br />
      <h1>Sobre a AUMA</h1>
      <NossoTrabalho>
        <div className="texto text-justify">
          <h2>Nosso Trabalho</h2>
          <p>
            Acompanhar e assistir pessoas com autismo e suas famílias, através de
            ações das políticas de assistência social, visando à redução dos níveis
            de dependência, busca da autonomia, e sua integração na sociedade e
            exercício de sua cidadania.<br />
            <br />
            <br />
            Contribuir para que a sociedade compreenda melhor o que é o
            TEA (Transtorno do Espectro do Autismo) acolhendo-o e derrubando os
            preconceitos existentes. <br />
            <br />
            <br />
            Atender crianças, adolescentes, jovens e adultos com diagnóstico
            fechado, através de ações como: orientações, oficinas, grupos, palestras
            e ações preventivas. <br />
            <br />
            <br />
            Conscientizar e trabalhar com a família para refletir, descobrir, aceitar
            e assumir seu papel junto a pessoa com TEA; buscando seu protagonismo e
            acolhimento, afim de ressignificar sua história.
          </p>
        </div>
        <img src={Img1} alt="Capa 1" />
      </NossoTrabalho>
      <hr />
      <h1 class="h1">Oferecendo atendimentos nas áreas</h1>
      <AreasAtendimento>
        <div className="pedagogia cards">
          <h1>Pedagogia</h1>
          <p>
            Por meio de atividades em grupos identificar as potencialidades
            e trabalhar as dificuldades identificadas, além de auxiliar em
            questões como interação social, relações interpessoais, afetivas
            e comportamentais; promovendo assim sua socialização, autonomia e
            qualidade de vida.
          </p>
        </div>        
        <div className="educador-fisico cards">
          <h1>Educador Físico</h1>
          <p>
            Através de atividades físicas coletivas, objetivam o incentivo da
            consciência corporal, melhora da lateralidade; além de contribuir
            com o fortalecimento de vínculos e promover a participação em
            atividades que favoreçam a socialização.
          </p>
        </div>
        <div className="psicologia cards">
          <h1>Psicologia</h1>
          <p>
            Desenvolver trabalho junto a equipe, oferecer suporte às famílias;
            ajudando a criar estratégias para que a pessoa com TEA adquira
            habilidades socias, autonomia e comunicação. Realiza também acolhida,
            escuta e palestras psicossociais dentro e fora do serviço; buscando
            difundir informações sobre o TEA e desmistificar preconceitos existentes.
          </p>
        </div>
        <div className="servico-social cards">
          <h1>Serviço Social</h1>
          <p>
            Promover acolhimento e orientação familiar, por meio atendimento
            psicossocial, visitas domiciliares, entrevistas individuais,
            acompanhamento em grupos socioeducativo e de capacitação.
          </p>
        </div>
      </AreasAtendimento>
      <hr />
      <h1 class="h1">Resumo dos Serviços</h1>
      <ResumoServicos>
        <img src={Img2} alt="Capa 1" />
        <div className="texto text-justify">
          <p>
            <b>Serviço de Proteção Social Especial para Pessoas com Deficiência - TEA
            e suas Famílias:</b> Serviço de proteção especial para pessoas com TEA de
            18 a 59 anos com diagnóstico principal em autismo e suas famílias,
            visando à melhoria da qualidade de vida dos atendidos e seu núcleo
            familiar e auxiliando a família na tarefa de cuidar; prevenindo situação
            de risco e violação de direitos e aliviando a sobrecarga do cuidador. <br />
            <br />
            <br />
            <b>TEA – Transformar e Acolher:</b> Oferta atividades em grupos através de oficinas
            e vivências diversas, onde as regras e comportamentos sociais esperados
            são ensinados de maneira lúdica e tranquila; levando a criança a se interessar
            pelo que se apresenta ao seu redor, com temas previamente definidos que;
            trabalhados ao longo do ano, contemplando datas importantes que marcam nosso
            calendário, demais assuntos de interesse além da estimulação da autonomia
            e independência. <br />
            <br />
            <br />
            <b>Programa de Habilitação e Reabilitação para pessoas com Transtorno do Espectro
            Autista e suas famílias:</b> compreende um conjunto de ações voltadas à regulação
            de garantia de direitos das Pessoas com Deficiência para o pleno exercício dos
            direitos individuais e sociais. O Programa assegura a transversalidade e a
            intersetorialidade, no enfrentamento e na superação das barreiras atitudinais,
            sociais, culturais, arquitetônicas e tecnológicas, contribuindo para autonomia
            e protagonismo das Pessoas com Deficiência do município através de acompanhamento
            a pessoas com TEA e suas famílias. Através de ações descentralizadas e em parceria
            com a rede socioassistencial; são realizadas ações na sede da AUMA e no território. <br />
            Através do acompanhamento e monitoramento das famílias inseridas no programa, a
            elaboração e acompanhamento de ações de articulação junto à rede, buscando
            prioritariamente serviços já existentes no território afim de inserir novos usuários
            com TEA e suas famílias; bem como elaborar e desenvolver novas ações junto aos demais
            serviços que compõe a rede intersetorial.
          </p>
        </div>
      </ResumoServicos>
    </AumaContainer>
  );
}
