import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  display: flex;
  align-items: center;

  > a {
    text-decoration: none;

    margin-left: 8px;

    font: 32px Roboto, sans-serif;
    font-weight: 700;
    color: #000;
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

  /* .content {
    width: 100%;
    max-width: 1500px;
    height: 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;
    margin-left: auto;
    margin-right: auto;

    .leftSide {
      cursor: pointer;

      display: flex;
      align-items: center;

      > a {
        margin-left: 8px;

        text-decoration: none;

        font: 32px Roboto, sans-serif;
        font-weight: 700;
        color: #000;
      }
    }

    .rightSide {
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
  } */
`;
