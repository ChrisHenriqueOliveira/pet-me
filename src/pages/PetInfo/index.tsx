import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { IoIosPerson, IoIosPaw, IoIosPhonePortrait } from 'react-icons/io';
import pet1 from '../../assets/pet1.jpg';
import pet2 from '../../assets/pet2.jpg';

import {
  Container,
  Content,
  Body,
  AnimationContainer,
  ImagePreview,
  InfoPreview,
} from './styles';
import Button from '../../components/Button';

const PetInfo: React.FC = () => {
  const [viewNumber, setViewNumber] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h1> Vira-lata Caramelo </h1>
            <p>
              Esse pet está morando em <strong>Jundiaí - São Paulo</strong>
            </p>
            <div className="main-info">
              <ImagePreview>
                <img src={pet2} alt="PetImage" />
              </ImagePreview>
              <InfoPreview>
                <h1>Informações gerais:</h1>
                <div className="divider" />
                <ul>
                  <li>
                    <IoIosPerson />
                    <p>Seu dono: Christian Henrique</p>
                  </li>
                  <li>
                    <IoIosPaw />
                    <p>Sua espécie: Cachorro</p>
                  </li>
                  <li>
                    <IoIosPaw />
                    <p>Seu porte: Grande</p>
                  </li>
                </ul>

                <div className="bottom-info">
                  <Button type="button" onClick={() => setViewNumber(true)}>
                    <IoIosPhonePortrait size={20} />
                    {viewNumber ? '11-95985-2552' : 'Visualizar contato'}
                  </Button>
                  <p>Adicionado em: 24/05/2020</p>
                </div>
              </InfoPreview>
            </div>
          </AnimationContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default PetInfo;
