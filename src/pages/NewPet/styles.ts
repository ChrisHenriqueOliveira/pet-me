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

  @media only screen and (max-width: 1000px) {
    margin: 0 0 64px 0;
  }
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

  > img {
    margin-top: -100px;
    max-width: 100%;
  }

  form {
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 20px;
    border-radius: 8px;

    -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

    h1 {
      font: 25px Roboto, sans-serif;
      font-weight: 700;
      color: #000;
    }

    h3 {
      font: 20px Roboto, sans-serif;
      font-weight: 500;
      color: #838bc5;

      width: 100%;
      margin: 16px 0;
    }

    p {
      margin-top: 8px;

      font: 16px Roboto, sans-serif;
      text-align: center;
      font-weight: 400;
      color: #979ba6;
    }

    button + button {
      background-color: #8e8e8e;

      &:hover {
        background: ${shade(0.2, '#8e8e8e')};
      }
    }
  }
`;
