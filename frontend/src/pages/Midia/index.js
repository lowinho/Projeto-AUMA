import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MidiaContainer, ImageCarousel } from './styled';

import Img1 from '../../assets/img/capa1.jpg';
import Img2 from '../../assets/img/capa2.jpg';
import Img3 from '../../assets/img/capa3.jpg';
import Img4 from '../../assets/img/capa4.jpg';
import Img5 from '../../assets/img/capa5.jpg';

export default function Midia() {
  return (
    <MidiaContainer>
      <br />
      <br />
      <br />
      <h1>Mídia</h1>

      <ImageCarousel>
        <Carousel>
          <div>
            <img src={Img1} alt="imagem 1 da capa" />
          </div>
          <div>
            <img src={Img2} alt="imagem 2 da capa" />
          </div>
          <div>
            <img src={Img3} alt="imagem 3 da capa" />
          </div>
          <div>
            <img src={Img4} alt="imagem 3 da capa" />
          </div>
          <div>
            <img src={Img5} alt="imagem 3 da capa" />
          </div>
        </Carousel>
      </ImageCarousel>
    </MidiaContainer>
  );
}
