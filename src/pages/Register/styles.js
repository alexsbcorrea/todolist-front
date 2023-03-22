import styled from "styled-components";

import Fundo from "../../assets/fundo.jpg";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 50px 0px;

  & section {
    display: flex;
    gap: 20px;
  }

  & section > div {
    width: 50%;
  }

  & form {
    margin: 0 auto;
    width: 75%;
    max-width: 600px;
    padding: 20px 30px;
    background-color: ${(props) => props.theme.t_main};
    border-radius: 15px;

    & div {
      display: flex;
      flex-direction: column;
    }

    & div label {
      margin-top: 15px;
      margin-bottom: 8px;
      font-size: 0.8rem;
      font-weight: bold;
      color: ${(props) => props.theme.bg_navbar};
    }

    & div input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.bg_inputs};
      border: 1px solid ${(props) => props.theme.bg_inputs};
    }

    & button {
      margin-top: 15px;
      width: 100%;
      height: 35px;
      background-color: ${(props) => props.theme.bg_navbar};
      border: 1px solid ${(props) => props.theme.bg_navbar};
      border-radius: 8px;
      color: ${(props) => props.theme.t_main};
      font-weight: bold;
    }

    & span {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      font-size: 0.8rem;
      text-align: center;
      font-weight: bold;
      color: ${(props) => props.theme.t_alt};
    }

    & span a {
      text-decoration: none;
      color: color ${(props) => props.theme.bg_navbar};
    }

    & h1 {
      margin: 0px;
      color: ${(props) => props.theme.bg_navbar};
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
    }

    & p {
      margin-top: 5px;
      color: ${(props) => props.theme.bg_navbar};
      font-weight: bold;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 0px;
    }
  }
`;
