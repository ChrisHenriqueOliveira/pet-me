import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdPaw } from 'react-icons/io';
import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Link to="/">Pet.me</Link>
      <div className="menu">
        <Link to="/">Início</Link>
        <Link to="/works">Como funciona</Link>
        <Link to="/aboutus">Sobre nós</Link>
        <Link to="/stories">Histórias</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </Container>
  );
};

export default Menu;
