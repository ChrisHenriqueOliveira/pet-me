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

  margin: 48px 0;

  img {
    width: 50%;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    margin: 0;

    img {
      margin: 32px 0;
      width: 100%;
      max-width: 500px;
    }
  }
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
  width: 100%;
  max-width: 500px;

  color: #000;

  animation: ${appearFromRight} 1s;

  h1 {
    font: 40px Roboto, sans-serif;
    font-weight: 700;
  }

  h2 {
    margin-bottom: 16px;

    font: 24px Roboto, sans-serif;
    font-weight: 400;
  }

  p {
    margin-top: 16px;

    font: 20px Roboto, sans-serif;
    font-weight: 400;

    span {
      color: #838bc5;
      font-weight: 700;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
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

  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 32px;
    }

    h2,
    p {
      font-size: 16px;
    }
  }
`;

export const AboutInfo = styled.div`
  margin: 32px 0;

  animation: ${appearFromRight} 1s;

  li {
    display: flex;
    border-radius: 20px;
    background-color: #838bc5;

    max-width: 500px;

    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(20px);
    }

    img {
      width: 150px;
      height: 150px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    .info {
      display: flex;
      flex-direction: column;

      p {
        margin: 10px 0 8px 16px;

        font: 18px Roboto, sans-serif;
        font-weight: 500;
      }

      .socialNetworks {
        margin: 0 0 8px 16px;

        a {
          color: #fff;
          svg {
            margin-right: 16px;
            cursor: pointer;

            transition: color 0.2s;

            &:hover {
              color: ${shade(0.2, '#fff')};
            }
          }
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 60px;
  height: 1px;
  background-color: #fff;
  margin: 0px 16px 16px 16px;
`;
