import React, { useRef, useEffect, useState, useCallback } from 'react';

import {
  IoIosPerson,
  IoIosPaw,
  IoIosMail,
  IoIosPhonePortrait,
  IoIosPin,
  IoIosCalendar,
  IoIosToday,
  IoIosSave,
  IoIosClose,
  IoMdClose,
  IoIosImage,
} from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import ImageInput from '../../components/ImageInput';

import { Container, Content, Body, AnimationContainer } from './styles';

import img from '../../assets/image3.png';

interface NewPetFormData {
  ownername: string;
  owneremail: string;
  ownercontact: string;
  ownerstate: string;
  ownercity: string;
  petname: string;
  petbirthdate: string;
  petspecie: string;
  petsize: string;
  petdesc: string;
}
interface LocationProperties {
  id: string;
  nome: string;
}

const NewPet: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [maximumDate, setMaximumDate] = useState('2020-06-07'); // temp date

  const [states, setStates] = useState<LocationProperties[]>([]);
  const [cities, setCities] = useState<LocationProperties[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSpecie, setSelectedSpecie] = useState('');

  const handleSubmit = useCallback(async (data: NewPetFormData) => {
    console.log(data);
  }, []);

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

  const handleSpecieChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    const specie = event.target.value as string;

    setSelectedSpecie(specie);
  };

  const handleSizeChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    const size = event.target.value as string;

    setSelectedSize(size);

    console.log(size);
  };

  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          <AnimationContainer>
            {/* <img src={img} alt="ing" /> */}
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Adicionar novo Pet</h1>
              <p>Entre com todos os dados para salvá-lo em nosso sistema!</p>

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

              <h3>Sobre o pet: </h3>
              <ImageInput
                name="petimage"
                icon={IoIosImage}
                placeholder="Imagem do pet"
              />
              <Input
                name="petname"
                icon={IoIosPaw}
                type="text"
                placeholder="Nome do pet"
              />
              <Input
                name="petbirthdate"
                icon={IoIosCalendar}
                type="date"
                max={maximumDate}
                placeholder="Data de nascimento"
              />
              <Select
                name="petspecie"
                icon={IoIosPaw}
                onChange={handleSpecieChange}
                value={selectedSpecie}
              >
                <option value="" disabled>
                  Espécie
                </option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Outro">Outro</option>
              </Select>
              <Select
                name="petsize"
                icon={IoIosPaw}
                onChange={handleSizeChange}
                value={selectedSize}
              >
                <option value="" disabled>
                  Porte
                </option>
                <option value="Pequeno">Pequeno</option>
                <option value="Medio">Medio</option>
                <option value="Grande">Grande</option>
              </Select>
              <TextArea
                name="petdesc"
                icon={IoIosToday}
                placeholder="Sobre o pet (características, comportamentos, interação com outras pessoas etc)"
              />
              <Button type="submit">
                Salvar
                <IoIosSave size={20} />
              </Button>
              <Button
                className="cancelButton"
                type="button"
                onClick={() => console.log('canceç')}
              >
                Cancelar
                <IoMdClose size={30} />
              </Button>
            </Form>
          </AnimationContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default NewPet;
