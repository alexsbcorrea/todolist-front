import styled from "styled-components";

import Fundo from "../../assets/fundo.jpg";
import { device } from "../../components/NavBarH/devices";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  object-fit: cover;
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;

  div {
    width: 50%;
    height: 50%;
    position: absolute;
    margin-left: 5%;
    z-index: auto;
    top: 200px;
    padding: 20px;
  }

  h1 {
    margin: 0px;
    font-size: 60px;
    color: ${(props) => props.theme.t_main};
    text-shadow: 2px 2px 3px #000;
  }

  p {
    margin-top: 10px;
    font-size: 32px;
    margin-bottom: 50px;
    color: ${(props) => props.theme.bg_navbar};
    font-weight: bold;
  }

  a {
    font-size: 20px;
    padding: 10px 40px;
    text-decoration: none;
    color: ${(props) => props.theme.t_main};
    border: 2px solid ${(props) => props.theme.t_main};
    border-radius: 15px;
  }

  @media ${device.tablet} {
    div {
      width: 40%;
    }
    h1 {
      margin-top: 175px;
      font-size: 60px;
    }
  }

  @media ${device.mobileL} {
    div {
      width: 70%;
    }
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
    }
  }
`;
