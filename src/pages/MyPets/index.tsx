import React, { useRef, useState, useCallback } from 'react';

import { IoIosLogIn, IoIosCard } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Input from '../../components/Input';

import myPetsLogin from '../../assets/myPetsLogin.svg';
import myPetsEmpty from '../../assets/myPetsEmpty.svg';

import { Container, Content, Body, AnimationContainer } from './styles';

const MyPets: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [cpf, setCpf] = useState('');

  const [logged, setLogged] = useState(false);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cpf: Yup.number().required('CPF é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

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
        <Menu />
        <Body>
          {logged ? (
            <AnimationContainer>
              <h1>Meus Pets</h1>
              <img src={myPetsEmpty} alt="PetImage" />
            </AnimationContainer>
          ) : (
            <AnimationContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Meus Pets</h1>
                <p>
                  Entre com o CPF utilizado para cadastrar os pets para ver
                  todos os seus pets no sistema
                </p>

                <Input
                  name="cpf"
                  icon={IoIosCard}
                  type="text"
                  placeholder="CPF (apenas números)"
                  value={cpf}
                  onChange={e => setCpf(e.currentTarget.value)}
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
