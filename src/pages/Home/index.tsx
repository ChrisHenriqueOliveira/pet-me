import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/petScreen2.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h2>Sentindo-se sozinho?</h2>
            <h1>Encontre um Companheiro!</h1>
            <p>
              Procure por pets em sua região, entre em contato com seus
              cuidadores e torne-o seu novo amigo!
            </p>
            <div className="buttons">
              <Link to="/search">
                <Button>Procurar</Button>
              </Link>
              <p>
                ou{' '}
                <span>
                  <Link to="/newpet">registrar meu pet</Link>
                </span>
              </p>
            </div>
          </AnimationContainer>

          <img src={img} alt="img1" />
        </Body>
      </Content>
    </Container>
  );
};

export default SignIn;
