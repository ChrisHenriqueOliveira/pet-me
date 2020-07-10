import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
  IoIosPerson,
  IoIosPaw,
  IoIosMail,
  IoIosPhonePortrait,
  IoIosPin,
  IoIosCalendar,
  IoIosToday,
  IoIosSave,
  IoIosImage,
  IoMdAdd,
} from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import ImageInput from '../../components/ImageInput';

import registerSuccessImg from '../../assets/registerSuccess.svg';

import { Container, Content, Body, AnimationContainer } from './styles';

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
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const maximumDate = '2020-06-07'; // temp date

  const [states, setStates] = useState<LocationProperties[]>([]);
  const [cities, setCities] = useState<LocationProperties[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSpecie, setSelectedSpecie] = useState('');

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleSubmit = useCallback(async (data: NewPetFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        ownercity: Yup.string().required('Cidade é obrigatória'),
        ownercontact: Yup.string().required('Contato é obrigatório'),
        owneremail: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um e-mail válido'),
        ownername: Yup.string().required('Nome do dono é obrigatório'),
        ownerstate: Yup.string().required('Estado é obrigatório'),
        petbirthdate: Yup.string().required('Data de nascimento é obrigatória'),
        petdesc: Yup.string().required('Descrição é obrigatória'),
        petimage: Yup.string().required('Imagem é obrigatória'),
        petname: Yup.string().required('Nome do pet é obrigatório'),
        petsize: Yup.string().required('Porte é obrigatório'),
        petspecie: Yup.string().required('Espécie é obrigatória'),
      });

      // await schema.validate(data, { abortEarly: false });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      setRegisterSuccess(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
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
        <Body>
          {registerSuccess ? (
            <AnimationContainer>
              <h1>Pet registrado com sucesso!</h1>
              <img src={registerSuccessImg} alt="SuccessImage" />
              <Button type="button" onClick={() => history.push('/mypets')}>
                Ir para meus pets
                <IoIosPaw size={20} />
              </Button>
              <Button type="button" onClick={() => setRegisterSuccess(false)}>
                Registrar novo pet
                <IoMdAdd size={20} />
              </Button>
            </AnimationContainer>
          ) : (
            <AnimationContainer>
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
              </Form>
            </AnimationContainer>
          )}
        </Body>
      </Content>
    </Container>
  );
};

export default NewPet;
