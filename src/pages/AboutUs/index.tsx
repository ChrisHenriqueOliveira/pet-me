import React from 'react';

import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi';
import { IoLogoGoogle } from 'react-icons/io';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Body,
  AnimationContainer,
  AboutInfo,
  Divider,
} from './styles';

import img from '../../assets/image3.png';

import christian from '../../assets/christian.jpg';

interface Members {
  id: number;
  name: string;
  image: string;
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
  email: string;
}

const AboutUs: React.FC = () => {
  const members: Members[] = [
    {
      id: 1,
      name: 'Christian Oliveira',
      image: christian,
      linkedin:
        'https://www.linkedin.com/in/christian-henrique-oliveira-28070117a/',
      github: 'https://github.com/ChrisHenriqueOliveira',
      instagram: 'https://www.instagram.com/_chrishenrique_/',
      facebook: 'https://www.facebook.com/christian.h.oliveira',
      email: 'o.christianh@gmail.com',
    },
    {
      id: 2,
      name: 'Guilherme Farias',
      image: christian,
      linkedin: 'https://www.linkedin.com/in/gisely-garcia-b66948190 ',
      github: '',
      instagram: 'https://www.instagram.com/giselygps/',
      facebook: 'https://www.facebook.com/gisely.gsouza',
      email: 'guilhermeblabla@gmail.com',
    },
  ];

  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            <h1>Sobre nós</h1>
            <h2>Gostou do nosso projeto?</h2>
            <p>
              Somos estudantes de ciências da computação e desenvolvemos esse
              projeto como TCC do nosso curso.
            </p>
            <p>
              Gostaria de falar diretamente conosco? Acesse alguma de nossas
              redes sociais que estarão disponíveis nessa página e mande sua
              mensagem.
            </p>
            <p>Att. Christian e Guilherme</p>
          </AnimationContainer>

          <div className="rightSide">
            <img src={img} alt="img1" />
          </div>
        </Body>

        <AboutInfo>
          {members.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="info">
                <p>{item.name}</p>
                <Divider />
                <div className="socialNetworks">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.linkedin}
                  >
                    <FiLinkedin size={25} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.linkedin}
                  >
                    <FiGithub size={25} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.instagram}
                  >
                    <FiInstagram size={25} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.facebook}
                  >
                    <FiFacebook size={25} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </AboutInfo>
      </Content>
    </Container>
  );
};

export default AboutUs;
