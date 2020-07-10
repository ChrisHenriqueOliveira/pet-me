import React from 'react';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/petScreen4.svg';

const Contact: React.FC = () => {
  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h1>Contato</h1>
            <h2>Possui algo para nos dizer?</h2>
            <p>
              Envie um e-mail para <span>contato@petme.com</span> contando-nos
              seu problema, sugestão ou história. Adoraríamos saber como esta
              sendo sua experiência com nossa plataforma.
            </p>
            <p>
              E mais, as melhores histórias ficarão disponíveis em nossa página
              de histórias, e para isso não esqueça de enviar também uma foto
              sua com seu novo amigo!
            </p>
          </AnimationContainer>

          <img src={img} alt="img1" />
        </Body>
      </Content>
    </Container>
  );
};

export default Contact;
