import styled, { keyframes } from "styled-components";

const OpenMenu = keyframes`
  to {
    height: 375px;
  }
`;

const CloseMenu = keyframes`
  to {
    height: 0px;
  }
`;

export const Container = styled.main`
  box-sizing: border-box;
  position: absolute;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 350px;
  height: 0px;
  background-color: ${(props) => props.theme.bg_back_d};
  border-radius: 10px 0px 10px 10px;
  right: 40px;
  top: 80px;
  transform-origin: top;
  overflow: hidden;
  z-index: 10000;
  animation: ${OpenMenu} 0.3s forwards ease-in-out;
`;

export const InfoUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: none;
  padding: 5px;

  h2 {
    margin: 0;
    color: ${(props) => props.theme.t_main};
    font-size: 1.2rem;
  }
  p {
    margin: 0;
    color: ${(props) => props.theme.t_alt};
  }
`;

export const Comands = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.t_alt};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;
    border: 1px solid ${(props) => props.theme.t_alt};
    border-radius: 5px;
    transition: all 0.5s;
  }

  a:hover {
    color: #000000;
    background-color: ${(props) => props.theme.t_alt};
  }
`;

export const Dashboard = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;

  p {
    margin: 0;
    color: ${(props) => props.theme.t_main};
    text-align: center;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    color: ${(props) => props.theme.t_alt};
    text-align: center;
    font-size: 2rem;
  }
`;

export const Tasks = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      color: ${(props) => props.theme.t_main};
      text-align: center;
      font-weight: 500;
    }

    h2 {
      margin: 0;
      color: ${(props) => props.theme.t_alt};
      text-align: center;
      font-size: 2rem;
    }
  }
`;
