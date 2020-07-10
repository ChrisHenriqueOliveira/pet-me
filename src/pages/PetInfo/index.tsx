import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

const PetInfo: React.FC = () => {
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
            <div className="previews">
              <ImagePreview>
                <img src={pet2} alt="PetImage" />
              </ImagePreview>
              <InfoPreview />
            </div>
          </AnimationContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default PetInfo;
