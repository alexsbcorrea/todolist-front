import styled from "styled-components";

export const Container = styled.main`
  margin-top: 80px;
  width: 100%;
  min-height: calc(100vh - 80px);
  height: auto;
  background-color: ${(props) => props.theme.bg_back};
  box-sizing: border-box;
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

export const CardTask = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 700px;
  height: 100;
  background-color: #232c3d;
  padding: 15px 30px;
  border-radius: 10px;
  border-left: 10px solid #1e73be;

  h2 {
    color: #ffffff;
  }

  p {
    color: #9a9696;
  }

  span {
    color: #9a9696;
  }
`;

export const Details = styled.div``;

export const Commands = styled.div``;
