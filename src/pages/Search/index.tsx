import React, { useEffect, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Lottie from 'react-lottie';
import Menu from '../../components/Menu';

import animationData from '../../assets/petsSearch.json';

import {
  Container,
  Content,
  Body,
  AnimationContainer,
  ResultsContainer,
} from './styles';

interface Values {
  id: string;
  nome: string;
}

const Search: React.FC = () => {
  const [states, setStates] = useState<Values[]>([]);
  const [cities, setCities] = useState<Values[]>([]);
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
              <div className="withResults">
                <h1>sim</h1>
              </div>
            ) : (
              <div className="withoutResults">
                <Lottie
                  options={defaultLottieOptions}
                  height={400}
                  width={400}
                />
              </div>
            )}
          </ResultsContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default Search;
