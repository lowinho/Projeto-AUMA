import React from 'react';

import { AutismoContainer, AutismoSection, AutismoSection2 } from './styled';

import Img1 from '../../assets/img/autismo1.jpg';
import Img2 from '../../assets/img/autismo2.jpg';

export default function Autismo() {
  return (
    <AutismoContainer>
      <br />
      <br />
      <br />
      <h1>Autismo, o que é?</h1>

      <AutismoSection>
        <p>
          <br />
          De acordo com Gauderer (1997), o autismo é uma inadequacidade no
          desenvolvimento que se manifesta de maneira grave durante toda vida. É
          incapacitante e aparece tipicamente nos três primeiros anos de vida.
          Acomete cerca de cada cinco mil nascidos e é quatro vezes mais comum
          entre meninos do que meninas.
          <br />
          <br />O autismo foi inicialmente descrito por Leo Kanner em 1943,
          caracterizado pela tendência ao isolamento, às dificuldades na
          comunicação, os problemas comportamentais e as atitudes inconscientes.{' '}
        </p>
        <img src={Img1} alt="Capa 1" />
      </AutismoSection>

      <AutismoSection2>
        <img src={Img2} alt="Capa 1" />
        <p>
          A área de comunicação é bastante afetada, uma vez que, há problemas de
          interação social, os prejuízos desta área variam. Em alguns casos,
          ocorre a ausência da comunicação verbal e nos indivíduos com fala; a
          conversação pode ser repetitiva e estereotipada, ou seja, quando
          estabelecida, apresenta-se repetição de frases ou palavras, fenômeno
          denominado de ecolalia. Os comportamentos são comprometidos, uma vez
          que, apresentam-se estereotipados e com padrões restritos, ou seja,
          rituais, rotinas não funcionais, “maneirismo” motores (dedos/mãos,
          “flapping” ou movimento com o corpo). Portanto, se faz necessários
          estudos individualizados de cada caso, uma vez que, as características
          e intensidade variam em cada pessoa com autismo. <br />
        </p>
      </AutismoSection2>
    </AutismoContainer>
  );
}
