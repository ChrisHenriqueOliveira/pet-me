import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

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

import { PetsData } from '../../utils/animalsMockData';

interface PetParams {
  id: string;
}

interface PetInfo {
  id: string;
  ownerName: string;
  ownerNumber: string;
  petImage: string;
  petName: string;
  petSize: string;
  petGender: string;
  petSpecies: string;
  petAge: string;
  petDescription: string;
  stateId: string;
  cityId: string;
  stateName: string;
  cityName: string;
}

const PetInfo: React.FC = () => {
  const [viewNumber, setViewNumber] = useState(false);

  const [petInfo, setPetInfo] = useState<PetInfo[] | null>();

  const { params } = useRouteMatch<PetParams>();

  useEffect(() => {
    const filteredPets = PetsData.filter((pet: PetInfo) => {
      return pet.id === params.id;
    });

    filteredPets.length > 0 ? setPetInfo(filteredPets) : setPetInfo(null);
  }, [params.id]);

  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            {petInfo && (
              <>
                <h1> {petInfo[0].petName} </h1>
                <p>
                  Esse pet está morando em
                  <strong>
                    {' '}
                    {petInfo[0].cityName} - {petInfo[0].stateName}
                  </strong>
                </p>
                <div className="main-info">
                  <ImagePreview>
                    <img src={petInfo[0].petImage} alt="PetImage" />
                  </ImagePreview>
                  <InfoPreview>
                    <h1>Informações gerais:</h1>
                    <Divider />
                    <ul>
                      <li>
                        <IoIosPerson />
                        <p>
                          <span>Dono:</span> {petInfo[0].ownerName}
                        </p>
                      </li>
                      <li>
                        <IoIosPaw />
                        <p>
                          <span>Espécie:</span> {petInfo[0].petSpecies}
                        </p>
                      </li>
                      <li>
                        <IoIosPaw />
                        <p>
                          <span>Porte:</span> {petInfo[0].petSize}
                        </p>
                      </li>
                      <li>
                        <IoIosToday />
                        <p>
                          <span>Descrição:</span> {petInfo[0].petDescription}
                        </p>
                      </li>
                    </ul>

                    <div className="bottom-info">
                      <Button type="button" onClick={() => setViewNumber(true)}>
                        <IoIosPhonePortrait size={20} />
                        {viewNumber
                          ? `${petInfo[0].ownerNumber}`
                          : 'Visualizar contato'}
                      </Button>
                      <p>Adicionado em: 24/05/2020</p>
                    </div>
                  </InfoPreview>
                </div>
              </>
            )}
          </AnimationContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default PetInfo;
