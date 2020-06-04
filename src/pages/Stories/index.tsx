import React from 'react';

import Menu from '../../components/Menu';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/image4.png';

const Stories: React.FC = () => {
  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            <h1>Histórias</h1>
            <h2>Quer saber sobre nosso impacto na vida das pessoas?</h2>
            <p>
              Aqui estão algumas das histórias das pessoas que utilizaram nossa
              plataforma e agora estão de vida nova com seu novo companheiro.
              Leia e inspire-se à ir agora mesmo encontrar o seu! Gostaria de
              compartilhar a sua história? Vá até a página de contato e saiba
              mais.
            </p>
          </AnimationContainer>

          <div className="rightSide">
            <img src={img} alt="img1" />
          </div>
        </Body>
      </Content>
    </Container>
  );
};

export default Stories;
