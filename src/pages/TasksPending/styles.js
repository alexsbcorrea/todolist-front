import styled from "styled-components";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.bg_back};
  padding-bottom: 50px;

  & h1 {
    margin: 0;
    padding-top: 20px;
    text-align: center;
    color: ${(props) => props.theme.t_main};
    margin-bottom: 10px;
  }

  > div > p {
    text-align: center;
    color: ${(props) => props.theme.t_alt};
  }

  > div > p > a {
    text-decoration: none;
    color: ${(props) => props.theme.t_main};
    font-weight: 500;
  }
`;
