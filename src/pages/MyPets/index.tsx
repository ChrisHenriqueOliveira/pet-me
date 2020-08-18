import React, { useRef, useState, useCallback } from 'react';

import {
  IoIosLogIn,
  IoIosCard,
  IoIosMail,
  IoMdMale,
  IoMdFemale,
  IoIosTrash,
  IoMdTrash,
  IoMdCreate,
} from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import myPetsLogin from '../../assets/myPetsLogin.svg';
import myPetsEmpty from '../../assets/myPetsEmpty.svg';

import {
  Container,
  Content,
  Body,
  AnimationContainer,
  LoadedResultsContainer,
} from './styles';

import { PetsData } from '../../utils/animalsMockData';
import Divider from '../../components/Divider';
import { PetProps } from '../../components/PetCard';

const MyPets: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [email, setEmail] = useState('');
  const [pets, setPets] = useState<PetProps[] | null>(PetsData);

  const [logged, setLogged] = useState(false);

  const handlePets = useCallback(() => {
    setPets(PetsData);
  }, []);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um formato válido de e-mail'),
      });

      await schema.validate(data, { abortEarly: false });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      handlePets();
      setLogged(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <Body>
          {logged ? (
            <AnimationContainer>
              <h1>Meus Pets</h1>
              {pets !== null ? (
                <LoadedResultsContainer>
                  <ul>
                    {pets.map(item => (
                      <li key={item.id}>
                        <img src={item.petImage} alt="Pet" />
                        <div className="main-info">
                          <h1>{item.petName}</h1>
                          <div className="genderAndAge">
                            {item.petGender === 'Macho' ? (
                              <IoMdMale />
                            ) : (
                              <IoMdFemale />
                            )}
                            <p>{item.petAge}</p>
                          </div>
                          <p>{item.petDescription}</p>
                        </div>
                        <div className="buttons-control">
                          <button type="button">
                            <IoMdCreate size={25} />
                          </button>
                          <button type="button">
                            <IoMdTrash size={25} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </LoadedResultsContainer>
              ) : (
                <img src={myPetsEmpty} alt="PetImage" />
              )}
            </AnimationContainer>
          ) : (
            <AnimationContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Meus Pets</h1>
                <Divider />
                <p>
                  Entre com o E-mail utilizado para cadastrar os pets para ver
                  todos os seus pets no sistema
                </p>

                <Input
                  name="email"
                  icon={IoIosMail}
                  type="string"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                />
                <Button type="submit">
                  Entrar
                  <IoIosLogIn size={20} />
                </Button>
                <img src={myPetsLogin} alt="PetImage" />
              </Form>
            </AnimationContainer>
          )}
        </Body>
      </Content>
    </Container>
  );
};

export default MyPets;
