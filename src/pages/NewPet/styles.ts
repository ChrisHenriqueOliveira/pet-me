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
  width: 416px;
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

  .searchSelects {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .select {
      width: 200px;
    }
  }
`;
