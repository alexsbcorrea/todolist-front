import styled from "styled-components";

export const FilterContainer = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 90%;
  max-width: 500px;
  height: 30px;
  //background-color: ${(props) => props.theme.bg_navbar};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;

  p {
    color: ${(props) => props.theme.t_main};
    padding: 5px 15px;
    border: 1px solid ${(props) => props.theme.t_main};
    border-radius: 5px;
    cursor: pointer;
  }

  .activefilter {
    color: #000000;
    padding: 5px 15px;
    border: 1px solid ${(props) => props.theme.t_alt};
    background-color: ${(props) => props.theme.t_main};
    border-radius: 5px;
    cursor: pointer;
  }
`;
