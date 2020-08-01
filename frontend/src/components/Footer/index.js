import React from 'react';

import { FaFacebook, FaHands } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import { Foot } from './styled';

export default function Footer() {
  return (
    <Foot>
      <div className="copy div">
        <p>Copyrigth</p>
        <FaHands /> <span>© AUMA</span>
      </div>

      <div className="address div">
        <span>Contate-nos</span>
        <br />
        <p>contato@aumapiracicaba.org.br</p>
        <p>+55 (19) 3424 1979</p>
      </div>

      <div className="link div">
        <span>Siga-nos</span> <br />
        <a
          href="https://pt-br.facebook.com/auma.piracicaba"
          id="FaFacebookF"
          data-tip="facebook"
        >
          <FaFacebook />
          <ReactTooltip />
        </a>
      </div>
    </Foot>
  );
}
