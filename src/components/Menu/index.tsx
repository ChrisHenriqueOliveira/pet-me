import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdMenu } from 'react-icons/io';
import { TopMenu, SideMenu } from './styles';

const Menu: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <TopMenu>
        <div className="logo">
          <IoMdMenu onClick={() => setIsShowing(!isShowing)} />
          <Link to="/">Pet.me</Link>
        </div>
        <div className="menu">
          <Link to="/">Início</Link>
          <Link to="/works">Como funciona</Link>
          <Link to="/aboutus">Sobre nós</Link>
          <Link to="/stories">Histórias</Link>
          <Link to="/contact">Contato</Link>
        </div>
      </TopMenu>

      <SideMenu isShowing={isShowing}>
        <div className="content">
          <div className="logo">
            <IoMdMenu onClick={() => setIsShowing(!isShowing)} />
            <Link to="/">Pet.me</Link>
          </div>
          <div className="menu">
            <Link to="/">Início</Link>
            <Link to="/works">Como funciona</Link>
            <Link to="/aboutus">Sobre nós</Link>
            <Link to="/stories">Histórias</Link>
            <Link to="/contact">Contato</Link>
          </div>
        </div>
      </SideMenu>
    </>
  );
};

export default Menu;
