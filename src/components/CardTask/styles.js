import styled from "styled-components";

import { device } from "./devices";

export const CardTask = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 700px;
  width: 90%;
  min-height: 60px;
  height: auto;
  background-color: rgba(35, 44, 61, 0.3);
  padding: 15px 30px;
  border-radius: 10px;
  border-left: 10px solid #009000;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  h2 {
    margin: 0;
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 8px;
    text-decoration: line-through;
  }

  p {
    margin: 0;
    color: #9a9696;
    font-size: 0.8rem;
    margin-bottom: 8px;
    text-decoration: line-through;
  }

  span {
    color: #9a9696;
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const CardTaskClosed = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 700px;
  width: 90%;
  min-height: 60px;
  height: auto;
  background-color: #232c3d;
  padding: 15px 30px;
  border-radius: 10px;
  border-left: 10px solid #ffff00;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    color: #9a9696;
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  span {
    color: #9a9696;
    font-size: 0.8rem;
    margin-bottom: 8px;
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const Details = styled.div`
  .closed {
    color: #9a9696;
    text-decoration: line-through;
  }
`;

export const Commands = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;

    .edit {
      display: none;
    }

    .remove {
      display: none;
    }
  } ;
`;
