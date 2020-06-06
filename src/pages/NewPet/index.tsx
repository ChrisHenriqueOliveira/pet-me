import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';

import { Container, Content, Body, AnimationContainer } from './styles';

interface Values {
  id: string;
  nome: string;
}

const NewPet: React.FC = () => {
  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer />
        </Body>
      </Content>
    </Container>
  );
};

export default NewPet;
