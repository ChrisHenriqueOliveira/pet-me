import React from 'react';

import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi';

import { borderColor } from 'polished';
import {
  Container,
  Content,
  Body,
  AnimationContainer,
  AboutInfo,
} from './styles';

import img from '../../assets/petScreen3.svg';

import christian from '../../assets/christian.jpg';
import guilherme from '../../assets/guilherme.jpg';
import Divider from '../../components/Divider';

interface Members {
  id: number;
  name: string;
  image: string;
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
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
    },
    {
      id: 2,
      name: 'Guilherme Farias',
      image: guilherme,
      linkedin: 'https://www.linkedin.com/in/guilherme-dfarias/',
      github: '',
      instagram: 'https://www.instagram.com/gui.dfarias/',
      facebook: 'https://www.facebook.com/profile.php?id=100015852306759',
    },
  ];

  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h1>Sobre nós</h1>
            <h2>Gostou do nosso projeto?</h2>
            <Divider />
            <p>
              Somos estudantes de ciências da computação e desenvolvemos esse
              projeto como TCC do nosso curso.
            </p>
            <p>
              Gostaria de falar diretamente conosco? Acesse alguma de nossas
              redes sociais que estarão disponíveis nessa página e mande sua
              mensagem.
            </p>
            <p>
              Att. <span>Christian e Guilherme</span>
            </p>
          </AnimationContainer>

          <img src={img} alt="img1" />
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
