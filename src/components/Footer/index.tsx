import React from 'react';

import { IoLogoGithub } from 'react-icons/io';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>{`Desenvolvido com <3 por Christian e Guilherme`}</p>
      <a
        href="https://github.com/ChrisHenriqueOliveira/my-pets"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub size={25} />
      </a>
    </Container>
  );
};

export default Footer;
