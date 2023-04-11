import styled from "styled-components";

import { device } from "./devices";

export const Search = styled.form`
  margin: 0 auto;
  margin-top: 10px;
  width: 90%;
  max-width: 700px;
  height: 40px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
  }

  .searchIcon {
    position: absolute;
    right: 8%;
  }
`;
