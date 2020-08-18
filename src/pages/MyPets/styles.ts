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
  margin: 32px 0;

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
  max-width: 1280px;

  margin: 0 auto 32px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromTop} 1s;

  img {
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
  }

  h1 {
    font: 25px Roboto, sans-serif;
    font-weight: 700;
    color: #000;

    margin-bottom: 8px;
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

    p {
      margin: 8px 0;

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

export const LoadedResultsContainer = styled.div`
  width: 100%;
  margin-top: 16px;

  ul {
    list-style: none;
    width: 100%;

    li {
      display: flex;
      align-items: center;

      width: 100%;
      min-height: 122px;
      padding: 16px;

      background-color: #838bc5;

      border-radius: 8px;

      img {
        margin: 0;

        height: 90px;
        width: 90px;

        border-radius: 50%;
      }

      .main-info {
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 85%;

        margin-left: 16px;

        h1 {
          width: 100%;
          margin: 0;

          font: 24px 'Roboto', sans-serif;
          font-weight: 500;
          color: #fff;
        }

        p {
          font: 16px Roboto, sans-serif;
          box-sizing: border-box;
          color: #f4ede8;
        }

        .genderAndAge {
          margin: 8px 0;

          width: 100%;

          display: flex;
          flex-direction: row;
          align-items: center;

          svg {
            color: #0170bf;
            width: 25px;
            height: 25px;
          }

          p {
            margin: 0 0 0 16px;

            font: 16px Roboto, sans-serif;
            color: #fff;
          }
        }
      }

      .buttons-control {
        display: flex;
        flex-direction: column;

        height: 100%;
        width: 15%;

        margin-left: 8px;

        align-items: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          height: 45px;
          width: 45px;

          padding: 8px;

          border: 0;
          border-radius: 50%;
          background-color: #eee;

          & + button {
            margin-top: 8px;
          }
        }
      }

      & + li {
        margin-top: 8px;
      }

      @media only screen and (max-width: 500px) {
        flex-direction: column;

        .main-info {
          margin: 8px 0 0 0;

          h1 {
            text-align: center;
          }

          .genderAndAge {
            justify-content: space-between;
          }
        }

        .buttons-control {
          flex-direction: row;
          width: 100%;

          margin: 8px 0 0 0;

          justify-content: center;

          button {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 45px;
            width: 45px;

            padding: 8px;

            border: 0;
            border-radius: 50%;
            background-color: #eee;

            & + button {
              margin: 0 0 0 8px;
            }
          }
        }
      }
    }
  }
`;
