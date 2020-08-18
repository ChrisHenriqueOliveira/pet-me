import React from 'react';

import { IoMdMale, IoMdFemale } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export interface PetProps {
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

interface PetCardProps {
  petInfo: PetProps;
}

export const PetCard: React.FC<PetCardProps> = ({ petInfo }) => {
  return (
    <Container>
      <img src={petInfo.petImage} alt="PetImage" />
      <h1>{petInfo.petName}</h1>
      <div className="genderAndAge">
        {petInfo.petGender === 'Macho' ? <IoMdMale /> : <IoMdFemale />}
        <p>{petInfo.petAge}</p>
      </div>
      <p>{petInfo.petDescription}</p>
      <Link to={`/pet/${petInfo.id}`} target="_blank">
        Mais informações
      </Link>
    </Container>
  );
};
