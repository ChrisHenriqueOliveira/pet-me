import styled, { keyframes } from 'styled-components';

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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  animation: ${appearFromTop} 1s;

  h1 {
    align-self: flex-start;

    font-family: 'Roboto', serif;
    font-weight: 700;
    font-size: 32px;
    color: #838bc5;
  }

  p {
    align-self: flex-start;
    margin-top: 8px;

    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 16px;
    color: #838bc5;

    strong {
      font-weight: 700;
    }
  }

  .main-info {
    width: 100%;
    background-color: #fff;
    margin: 16px auto 0 auto;

    display: flex;
    align-items: flex-start;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
`;

export const ImagePreview = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 32px;
  background-color: #f0f2fd;
  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  img {
    white-space: nowrap;
    text-align: center;
    width: 100%;
    max-height: 400px;
    border-radius: 8px;
    object-fit: contain;
    user-select: none;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const InfoPreview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-height: 400px;
  margin-left: auto;
  padding: 16px;
  background-color: #f0f2fd;

  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: 'Roboto', serif;
    font-weight: 700;
    font-size: 24px;
    color: #838bc5;
  }

  .divider {
    width: 100%;
    border: 1px dashed #838bc5;
    margin: 16px 0;
  }

  ul {
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      margin-top: 8px;

      svg {
        color: #838bc5;
      }

      p {
        margin: 0 0 0 8px;
      }
    }
  }

  .bottom-info {
    margin-top: auto;

    button {
      svg {
        margin: 0 8px 0 0;
      }
    }

    p {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    min-height: 300px;

    height: 250px;
    margin: 16px auto 0 auto;
  }
`;
