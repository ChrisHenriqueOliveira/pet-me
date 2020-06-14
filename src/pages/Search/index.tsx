import React, { useRef, useEffect, useState, useCallback } from 'react';

import { IoIosPin, IoMdSearch } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Lottie from 'react-lottie';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

import Menu from '../../components/Menu';
import Select from '../../components/Select';
import Button from '../../components/Button';

import animationData from '../../assets/petsSearch.json';

// temp

import pet1 from '../../assets/pet1.jpg';
import pet2 from '../../assets/pet2.jpg';
import pet3 from '../../assets/pet3.jpg';
import pet4 from '../../assets/pet4.jpg';
import pet5 from '../../assets/pet5.jpg';

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

interface NewSearchData {
  city: string;
  state: string;
}
interface LocationProperties {
  id: string;
  nome: string;
}

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [states, setStates] = useState<LocationProperties[]>([]);
  const [cities, setCities] = useState<LocationProperties[]>([]);
  const [pets, setPets] = useState('');

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const showPetTem = [
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
    { number: pet1 },
    { number: pet2 },
    { number: pet3 },
    { number: pet4 },
    { number: pet5 },
  ];

  useEffect(() => {
    fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    )
      .then(response => response.json())
      .then(data => setStates(data));
  }, []);

  const handleSubmit = useCallback(async (data: NewSearchData) => {
    console.log(data);
    setPets('s');

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
        <Menu />
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
              <Button type="submit">
                Pesquisar
                <IoMdSearch size={20} />
              </Button>
            </Form>
          </AnimationContainer>
          <ResultsContainer>
            {pets !== '' ? (
              <LoadedResultsContainer>
                {showPetTem.map(item => (
                  <PetItem key={item.number}>
                    <img src={item.number} alt="PetImage" />
                    <h1>Clebinho do mato</h1>
                    <div className="genderAndAge">
                      <IoMdFemale />
                      <p>2 meses</p>
                    </div>
                    <p>
                      Usuário de ossos e impiedoso perante os aquáticos e
                      roedores enquanto navega pelos rios em busca da gata
                      certa... ou não.
                    </p>
                    <button type="button">Mais informações</button>
                  </PetItem>
                ))}
              </LoadedResultsContainer>
            ) : (
              <LoadingResultsContainer>
                <h2>Nada para mostrar aqui ainda =(</h2>
                <Lottie
                  options={defaultLottieOptions}
                  height={400}
                  width={400}
                />
              </LoadingResultsContainer>
            )}
          </ResultsContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default Search;
