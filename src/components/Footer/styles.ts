import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 32px;

  border-top: 2px solid #f0f2fd;

  background-color: #838bc5;

  a {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  @media only screen and (max-width: 450px) {
    position: relative;
    height: 64px;
    padding: 16px;

    p {
      text-align: center;
    }
  }
`;
