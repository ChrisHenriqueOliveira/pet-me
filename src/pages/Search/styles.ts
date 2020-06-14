import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1280px;

  margin: 0 auto;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  max-width: 500px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromTop} 1s;

  h1 {
    margin-bottom: 24px;

    font: 24px Roboto, sans-serif;
    font-weight: 700;
    color: #000;
  }

  form {
    width: 100%;

    > svg {
      margin-left: 8px;
    }
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-top: 32px;
`;

export const LoadingResultsContainer = styled.div`
  width: 100%;

  h2 {
    color: #000;
    font-weight: 500;

    margin-top: 32px;

    width: 100%;
    text-align: center;

    margin-bottom: 32px;
  }
`;

export const LoadedResultsContainer = styled.div`
  /* background-color: red; */
  animation: ${appearFromTop} 1s;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  width: 100%;

  @media only screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 970px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

export const PetItem = styled.div`
  background-color: #838bc5;

  /* border: 1px solid #646db0;
  box-shadow: -1px 1px #646db0, -2px 2px #646db0, -3px 3px #646db0,
    -4px 4px #646db0, -5px 5px #646db0; */

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 400px;
  padding: 16px;

  border-radius: 20px;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
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

  button {
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
