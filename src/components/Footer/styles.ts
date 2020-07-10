import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 32px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: #838bc5;

  a {
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
