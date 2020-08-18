import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #838bc5;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 400px;
  padding: 16px;

  border-radius: 10px;
  border: 2px solid #838bc5;

  transition: border-color 0.2s;

  &:hover {
    border-color: #f0f2fd;
  }

  img {
    border-radius: 10px;
    margin: 0;
    max-width: 100%;
    width: auto;
    height: 185px;

    resize: contain;
  }

  h1 {
    margin-top: 8px;

    width: 100%;
    text-align: center;

    font: 24px Roboto, sans-serif;
    font-weight: 500;
    color: #fff;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .genderAndAge {
    margin-top: 8px;

    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #0170bf;
      width: 25px;
      height: 25px;
    }

    p {
      margin: 0;

      font: 16px Roboto, sans-serif;
      color: #fff;
    }
  }

  p {
    margin-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: auto;

    background-color: #fff;
    width: 100%;
    height: 35px;

    border: 0;
    border-radius: 8px;

    font: 16px Roboto, sans-serif;
    font-weight: 500;
    color: #838bc5;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fff')};
    }
  }
`;
