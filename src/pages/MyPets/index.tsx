import React, { useRef, useState, useCallback } from 'react';

import { IoIosLogIn, IoIosCard } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import myPetsLogin from '../../assets/myPetsLogin.svg';
import myPetsEmpty from '../../assets/myPetsEmpty.svg';

import { Container, Content, Body, AnimationContainer } from './styles';
import Divider from '../../components/Divider';

const MyPets: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [email, setEmail] = useState('');

  const [logged, setLogged] = useState(false);

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
              <img src={myPetsEmpty} alt="PetImage" />
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
                  icon={IoIosCard}
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
