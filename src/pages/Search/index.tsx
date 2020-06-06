import React, { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Lottie from 'react-lottie';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import Menu from '../../components/Menu';

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

interface Values {
  id: string;
  nome: string;
}

const Search: React.FC = () => {
  const [states, setStates] = useState<Values[]>([]);
  const [cities, setCities] = useState<Values[]>([]);
  const [pets, setPets] = useState('asds');

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

    setPets('s');
  };

  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            <h1>Selecione onde deseja buscar:</h1>
            <div className="searchSelects">
              <Select
                className="select"
                value={selectedState}
                onChange={handleStateChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Estado
                </MenuItem>
                {states.map((state: Values) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.nome}
                  </MenuItem>
                ))}
              </Select>
              <Select
                className="select"
                value={selectedCity}
                onChange={handleCityChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Cidade
                </MenuItem>
                {cities.map((city: Values) => (
                  <MenuItem key={city.id} value={city.id}>
                    {city.nome}
                  </MenuItem>
                ))}
              </Select>
            </div>
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
