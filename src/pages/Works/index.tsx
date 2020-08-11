import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/petScreen1.svg';
import Divider from '../../components/Divider';

const Works: React.FC = () => {
  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h1>Como isso funciona?</h1>
            <h2>É muito simples!</h2>
            <Divider />
            <p>
              Pessoas que estão interessadas em encontrar novos donos para seus
              pets registram seus animaizinhos na plataforma e pessoas que estao
              atrás de um novo amigo utilizam ela para procurar por eles. Nossa
              função aqui é facilitar a comunicação entre essas duas partes
              Começe agora mesmo!
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

export default Works;
