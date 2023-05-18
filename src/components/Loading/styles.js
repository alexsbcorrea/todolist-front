import styled, { keyframes } from "styled-components";

const RotateLoading = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 100%;
  border: 10px solid ${(props) => props.colorBase};
  border-top-color: ${(props) => props.colorLine};
  border-right-color: ${(props) => props.colorLine};
  border-left-color: ${(props) => props.colorLine};
  animation: ${RotateLoading} 1s infinite linear;
`;
