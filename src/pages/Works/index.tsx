import React from 'react';

import Menu from '../../components/Menu';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/image2.png';

const Works: React.FC = () => {
  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            <h1>Como isso funciona?</h1>
            <h2>É muito simples!</h2>
            <p>
              Pessoas que estão interessadas em encontrar novos donos para seus
              pets registram seus animaizinhos na plataforma e pessoas que estao
              atrás de um novo amigo utilizam ela para procurar por eles. Nossa
              função aqui é facilitar a comunicação entre essas duas partes
              Começe agora mesmo!
            </p>
            <div className="buttons">
              <a href="google.com">Procurar</a>
              <p>
                ou <span>registrar meu pet</span>
              </p>
            </div>
          </AnimationContainer>

          <div className="rightSide">
            <img src={img} alt="img1" />
          </div>
        </Body>
      </Content>
    </Container>
  );
};

export default Works;
