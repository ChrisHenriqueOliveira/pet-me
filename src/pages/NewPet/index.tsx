import React, { useEffect, useState } from 'react';

import {
  IoIosPerson,
  IoIosPaw,
  IoIosMail,
  IoIosPhonePortrait,
  IoIosPin,
  IoIosCalendar,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/image3.png';

interface LocationProperties {
  id: string;
  nome: string;
}

const NewPet: React.FC = () => {
  const [formPart, setFormPart] = useState('pet');
  const [maximumDate, setMaximumDate] = useState('2020-06-07'); // temp date
  const [states, setStates] = useState<LocationProperties[]>([]);
  const [cities, setCities] = useState<LocationProperties[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

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
            <img src={img} alt="ing" />
            <Form onSubmit={() => console.log('asd')}>
              <h1>Adicionar novo Pet</h1>
              <p>Entre com todos os dados para salvá-lo em nosso sistema!</p>

              {formPart === 'owner' ? (
                <>
                  <h3>Sobre você: </h3>
                  <Input
                    name="ownername"
                    icon={IoIosPerson}
                    type="text"
                    placeholder="Nome"
                  />
                  <Input
                    name="owneremail"
                    icon={IoIosMail}
                    type="email"
                    placeholder="E-mail"
                  />
                  <Input
                    name="ownercontact"
                    icon={IoIosPhonePortrait}
                    type="text"
                    placeholder="Celular"
                  />
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

                  <Button type="button" onClick={() => setFormPart('pet')}>
                    Próximo
                    <IoIosArrowForward size={20} />
                  </Button>
                </>
              ) : (
                <>
                  <h3>Sobre o pet: </h3>
                  <Input
                    name="petname"
                    icon={IoIosPaw}
                    type="text"
                    placeholder="Nome do pet"
                  />
                  <Input
                    name="petbirthdate"
                    icon={IoIosCalendar}
                    type="text"
                    max={maximumDate}
                    placeholder="Data de nascimento"
                  />
                  <Input
                    name="petspecies"
                    icon={IoIosPaw}
                    type="text"
                    placeholder="Espécie"
                  />
                  <Input
                    name="petsize"
                    icon={IoIosPaw}
                    type="text"
                    placeholder="Porte"
                  />
                  <Input
                    name="petsize"
                    icon={IoIosPaw}
                    type="checkbox"
                    placeholder="Porte"
                  />
                  <Button type="button" onClick={() => setFormPart('owner')}>
                    <IoIosArrowBack size={20} />
                    Voltar
                  </Button>
                </>
              )}
            </Form>
          </AnimationContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default NewPet;
