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
  align-items: center;
  justify-content: space-between;

  margin: 80px 0;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  margin-right: 16px;
  width: 500px;
  max-width: 500px;

  color: #000;

  animation: ${appearFromRight} 1s;

  h2 {
    font: 24px Roboto, sans-serif;
    font-weight: 400;
  }

  h1 {
    margin-top: 24px;

    font: 72px Roboto, sans-serif;
    font-weight: 700;
  }

  p {
    margin-top: 24px;

    font: 24px Roboto, sans-serif;
    font-weight: 300;
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-top: 64px;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      border-radius: 8px;
      color: #000;

      width: 150px;
      height: 64px;
      background-color: #838bc5;

      font: 24px Roboto, sans-serif;
      font-weight: 400;
      color: #fff;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#838bc5')};
      }
    }

    p {
      margin: 0 8px;
      align-self: flex-end;

      font: 18px Roboto, sans-serif;
      font-weight: 400;
      color: #000;

      span {
        a {
          cursor: pointer;

          font-weight: 500;
          color: #838bc5;

          transition: color 0.2s;

          &:hover {
            color: ${shade(0.2, '#838bc5')};
          }
        }
      }
    }
  }
`;
