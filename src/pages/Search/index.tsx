import React, { useRef, useEffect, useState, useCallback } from 'react';

import { IoIosPin, IoMdSearch, IoMdFemale, IoMdMale } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';
import Select from '../../components/Select';
import Button from '../../components/Button';

import petAdoptionSearch from '../../assets/petAdoptionSearch.svg';

import {
  Container,
  Content,
  Body,
  AnimationContainer,
  ResultsContainer,
  LoadingResultsContainer,
  LoadedResultsContainer,
  PetItem,
} from './styles';

import { PetsData } from '../../utils/animalsMockData';
import { PetCard, PetProps } from '../../components/PetCard';

interface NewSearchData {
  ownercity: string;
  ownerstate: string;
}
interface LocationProperties {
  id: string;
  nome: string;
}

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [states, setStates] = useState<LocationProperties[]>([]);
  const [cities, setCities] = useState<LocationProperties[]>([]);
  const [pets, setPets] = useState<PetProps[] | null>(null);

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then(response => response.json())
      .then(data => setStates(data));
  }, []);

  const handleSubmit = useCallback(async (data: NewSearchData) => {
    // const filteredPets = PetsData.filter(pet => {
    //   return pet.city === data.ownercity;
    // });

    // filteredPets.length > 0 ? setPets(filteredPets) : setPets(null);
    setPets(PetsData);
  }, []);

  const handleStateChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    const state = event.target.value as string;

    setSelectedState('');
    setSelectedCity('');

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos?orderBy=nome`,
    )
      .then(response => response.json())
      .then(data => setCities(data));

    setSelectedState(state);
  };

  const handleCityChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    const city = event.target.value as string;

    setSelectedCity(city);
  };

  return (
    <Container>
      <Content>
        <Body>
          <AnimationContainer>
            <h1>Selecione onde deseja buscar:</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Select
                name="ownerstate"
                icon={IoIosPin}
                placeholder="Estado"
                onChange={handleStateChange}
                value={selectedState}
              >
                <option value="" disabled>
                  Estado
                </option>
                {states.map((state: LocationProperties) => (
                  <option key={state.id} value={state.id}>
                    {state.nome}
                  </option>
                ))}
              </Select>
              <Select
                name="ownercity"
                icon={IoIosPin}
                placeholder="Cidade"
                onChange={handleCityChange}
                value={selectedCity}
                disabled={!selectedState}
              >
                <option value="" disabled>
                  Cidade
                </option>
                {cities.map((city: LocationProperties) => (
                  <option key={city.id} value={city.id}>
                    {city.nome}
                  </option>
                ))}
              </Select>
              <Button type="submit" disabled={!selectedCity}>
                Pesquisar
                <IoMdSearch size={20} />
              </Button>
            </Form>
          </AnimationContainer>
          <ResultsContainer>
            {pets !== null ? (
              <LoadedResultsContainer>
                {pets.map(item => (
                  <PetCard key={item.id} petInfo={item} />
                ))}
              </LoadedResultsContainer>
            ) : (
              <LoadingResultsContainer>
                <img src={petAdoptionSearch} alt="PetImage" />
              </LoadingResultsContainer>
            )}
          </ResultsContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default Search;
