import React from 'react';

import Menu from '../../components/Menu';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/image1.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            <h2>Sentindo-se sozinho?</h2>
            <h1>Encontre um Companheiro!</h1>
            <p>
              Procure por pets em sua região, entre em contato com seus
              cuidadores e torne-o seu novo amigo!
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

export default SignIn;
