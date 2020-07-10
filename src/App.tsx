import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Menu from './components/Menu';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
