import styled, { css } from 'styled-components';

interface MenuProps {
  isShowing: boolean;
}

export const TopMenu = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: none;

      cursor: pointer;

      color: #000;

      width: 40px;
      height: 40px;
    }

    > a {
      text-decoration: none;

      margin-left: 8px;

      font: 32px Roboto, sans-serif;
      font-weight: 700;
      color: #000;

      cursor: pointer;
    }
  }

  .menu {
    display: flex;

    > a {
      text-decoration: none;

      margin-right: 16px;

      font: 20px Roboto, sans-serif;
      font-weight: 500;
      color: #000;

      transition: color 0.2s;

      &:hover {
        color: #838bc5;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .logo {
      svg {
        display: flex;
      }
    }

    .menu {
      display: none;
    }
  }
`;

export const SideMenu = styled.div<MenuProps>`
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  overflow: hidden;

  width: 0%;
  height: 0%;

  transition: width 0.2s;

  ${props =>
    props.isShowing &&
    css`
      width: 80%;
      height: 100%;
    `}

  background-color: #838bc5;

  .content {
    width: 95%;
    height: 100%;
    margin-left: auto;

    .logo {
      height: 150px;
      display: flex;
      align-items: center;
      color: #fff;

      svg {
        cursor: pointer;

        color: #fff;

        width: 40px;
        height: 40px;
      }

      > a {
        cursor: pointer;

        color: #fff;

        text-decoration: none;

        margin-left: 8px;

        font: 32px Roboto, sans-serif;
        font-weight: 700;
      }
    }

    .menu {
      display: flex;
      flex-direction: column;

      > a {
        display: flex;
        align-items: center;

        text-decoration: none;

        margin-right: 16px;

        font: 20px Roboto, sans-serif;
        font-weight: 500;
        color: #fff;
        height: 50px;

        transition: border 0.1s, padding 0.1s;

        &:hover {
          border-left: 3px solid #fff;
          padding-left: 20px;
        }
      }
    }
  }
`;
