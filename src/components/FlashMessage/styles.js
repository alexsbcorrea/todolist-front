import styled, { keyframes } from "styled-components";

import { device } from "../NavBarH/devices";

const animate = keyframes`
  to {
    width: 100%;
  }
`;

export const Container = styled.main`
  position: absolute;
  top: 80px;
  left: 0px;
  width: 100vw;
  height: calc(100% - 80px);
  background-color: RGBA(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Message = styled.main`
  position: relative;
  margin: 0 auto;
  margin-top: 180px;
  width: 600px;
  max-width: 80%;
  height: 350px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    margin: -15px;
    text-align: center;
  }

  p:nth-child(1) {
    padding: 40px 10px 10px 10px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
  }

  button {
    display: block;
    width: 50%;
    height: 45px;
    background-color: #1e73be;
    border: none;
    border-radius: 15px;
    margin: 0 auto;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }

  .notify {
    color: orange;
  }

  @media ${device.mobileL} {
    height: 330px;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media ${device.mobileS} {
    height: 310px;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const MessageToast = styled.main`
  position: relative;
  margin: 0 auto;
  margin-top: 300px;
  width: 630px;
  max-width: 80%;
  height: 50px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;

  div:nth-child(1) {
    width: 10%;
    min-height: 100%;
    height: auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(2) {
    width: 90%;
    min-height: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  p:nth-child(1) {
    margin: 0;
    margin-top: -5px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p:nth-child(2) {
    margin: 0;
    text-align: left;
    font-size: 1.2rem;
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }

  .notify {
    color: orange;
  }

  @media ${device.mobileL} {
    height: 75px;
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }

  @media ${device.mobileS} {
    height: 75px;
    flex-direction: column;
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

export const StatusBarS = styled.div`
  position: absolute;
  width: 0%;
  max-width: 100%;
  height: 10px;
  background-color: green;
  bottom: 0;
  left: 0;
  animation: ${animate} 3s linear forwards;
`;

export const StatusBarE = styled.div`
  position: absolute;
  width: 0%;
  max-width: 100%;
  height: 10px;
  background-color: red;
  bottom: 0;
  left: 0;
  animation: ${animate} 3s linear forwards;
`;

export const StatusBarN = styled.div`
  position: absolute;
  width: 0%;
  max-width: 100%;
  height: 10px;
  background-color: orange;
  left: 0;
  bottom: 0;
  animation: ${animate} 3s linear forwards;
`;
