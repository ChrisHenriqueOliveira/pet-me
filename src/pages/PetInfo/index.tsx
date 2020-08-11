import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  IoIosPerson,
  IoIosPaw,
  IoIosPhonePortrait,
  IoIosToday,
} from 'react-icons/io';
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
import Divider from '../../components/Divider';

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
                <Divider />
                <ul>
                  <li>
                    <IoIosPerson />
                    <p>
                      <span>Dono:</span> Christian Henrique
                    </p>
                  </li>
                  <li>
                    <IoIosPaw />
                    <p>
                      <span>Espécie:</span> Cachorro
                    </p>
                  </li>
                  <li>
                    <IoIosPaw />
                    <p>
                      <span>Porte:</span> Grande
                    </p>
                  </li>
                  <li>
                    <IoIosToday />
                    <p>
                      <span>Descrição:</span> Usuário de ossos e impiedoso
                      perante os aquáticos eroedores enquanto navega pelos rios
                      em busca da gata certa.
                    </p>
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
