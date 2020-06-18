import React, { useRef, useState, useCallback, useEffect } from 'react';

import { IoIosPhonePortrait, IoIosLogIn, IoIosText } from 'react-icons/io';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Body, AnimationContainer } from './styles';

interface LoginInfo {
  cellphonenumber: string;
}

const MyPets: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const [cellphoneNumber, setCellphoneNumber] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const [cellPhoneFilled, setCellPhoneFilled] = useState(false);
  const [logged, setLogged] = useState(false);

  const handleSubmitCellphoneNumber = useCallback(() => {
    // verifica se informação inserida é valida YUP
    // verifica se existe esse numero de celular no banco
    // se ja existe, msg de erro
    // envia mensagem SMS com codigo
    // insere no banco o codigo
    // se der erro, msg de erro
    // se nao:
    setCellPhoneFilled(true);
  }, []);

  const handleSubmitAccessCode = useCallback(async () => {
    // verifica se informação inserida é valida YUP
    // verifica se bate com cellphone e code do banco
    // se não for, mensagem de codigo invalido
    // se for:
    setLogged(true);
  }, []);

  const handleLogout = useCallback(() => {
    history.push('/mypets');
  }, [history]);

  const handleShowDialog = useCallback(() => {
    return (
      <Dialog
        open={logoutConfirm}
        onClose={() => setLogoutConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deseja realmente sair?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao clicar em SIM você está saindo de sua conta e precisará inserir
            seu celular novamente para entrar! Caso queira continuar logado,
            clique em NÃO.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout}>SIM</Button>
          <Button onClick={() => setLogoutConfirm(false)}>NÃO</Button>
        </DialogActions>
      </Dialog>
    );
  }, [handleLogout, logoutConfirm]);

  return (
    <Container>
      <Content>
        <Menu />
        <Body>
          {logged ? (
            <AnimationContainer>
              <h1>Meus Pets</h1>
            </AnimationContainer>
          ) : (
            <AnimationContainer>
              {!cellPhoneFilled ? (
                <Form ref={formRef} onSubmit={handleSubmitCellphoneNumber}>
                  <h1>Meus Pets</h1>
                  <p>
                    Entre com o número de celular utilizado para cadastrar os
                    pets para receber o código de acesso via SMS!
                  </p>

                  <Input
                    name="cellphonenumber"
                    icon={IoIosPhonePortrait}
                    type="text"
                    placeholder="Celular"
                    value={cellphoneNumber}
                    onChange={e => setCellphoneNumber(e.currentTarget.value)}
                  />
                  <Button type="submit">
                    Enviar código de acesso
                    <IoIosLogIn size={20} />
                  </Button>
                </Form>
              ) : (
                <Form ref={formRef} onSubmit={handleSubmitAccessCode}>
                  <h1>Meus Pets</h1>
                  <p>Entre com o código de acesso enviado para seu celular!</p>

                  <Input
                    name="accesscode"
                    icon={IoIosText}
                    type="number"
                    placeholder="Código"
                    value={accessCode}
                    onChange={e => setAccessCode(e.currentTarget.value)}
                  />

                  <Button type="submit">
                    Acessar
                    <IoIosLogIn size={20} />
                  </Button>
                </Form>
              )}
            </AnimationContainer>
          )}
        </Body>
      </Content>
      {logoutConfirm && handleShowDialog()}
    </Container>
  );
};

export default MyPets;
