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
    margin-top: 24px;

    font: 24px Roboto, sans-serif;
    font-weight: 400;
  }

  h1 {
    font: 72px Roboto, sans-serif;
    font-weight: 700;
  }

  p {
    margin-top: 24px;

    font: 24px Roboto, sans-serif;
    font-weight: 300;

    span {
      color: #666fb1;
      font-weight: 700;
    }
  }
`;
