import styled, { keyframes } from "styled-components";
import { device } from "./devices";

const bg_menu = (props) => props.theme.bg_navbar;
const bg_items_menu = (props) => props.theme.bg_navbar;
const text_color = (props) => props.theme.t_main;
const text_hover = (props) => props.theme.t_main;
const color_lines = (props) => props.theme.t_main;
const bg_hover = (props) => props.theme.bg_navbar;
const bd_righit = (props) => props.theme.bg_navbar;

const OpenMenu = keyframes`
  to {
    transform: translateX(0);
  }
`;

const CloseMenu = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

export const ContainerMenu = styled.header`
  position: fixed;
  margin-top: -80px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  background-color: ${bg_menu};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${(props) => props.theme.bg_back_d};
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  box-sizing: border-box;
  height: 80%;
  width: 60px;
  margin-left: 40px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsMenu = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
  box-sizing: border-box;

  .mobile {
    display: none;
  }

  li a {
    text-decoration: none;
    font-weight: 500;
    color: ${text_color};
    padding: 10px 20px;
    transition: all 0.3s;
  }

  li a:hover {
    text-decoration: none;
    color: ${text_hover};
    padding: 10px 20px;
    cursor: pointer;
  }

  .specialButton {
    background-color: ${(props) => props.theme.bg_back_d};
    border-radius: 10px;
  }

  @media ${device.tablet} {
    display: none;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: 0px;
    padding: 10px;
    padding-bottom: 20px;
    width: 70%;
    height: auto;
    background-color: ${bg_items_menu};
    border-radius: 0 10px 0 10px;
    border-right: 4px solid ${bd_righit};
    display: ${({ open }) => (open ? "flex" : "none")};
    align-items: baseline;
    //justify-content: center;
    transform: translateX(-100%);
    animation: ${OpenMenu} 0.5s ease-out forwards;
    transition: all 0.3s;
    z-index: 100000;

    .mobile {
      display: inline;
    }

    li a {
      color: ${text_color};
      font-size: 1.5rem;
    }

    li a:hover {
      color: ${text_hover};
    }
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: auto;
  margin-right: 30px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Hamburguer = styled.div`
  box-sizing: border-box;
  margin-left: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 99;
  cursor: pointer;

  @media ${device.tablet2} {
    display: none;
  }
`;

export const LogoHamburguer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  gap: 15px;
  cursor: pointer;
`;

export const Line1 = styled.div`
  width: 40px;
  height: 6px;
  border-radius: 2px;
  background-color: ${color_lines};
  transform-origin: right;
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  transition: all 0.3s;
`;

export const Line2 = styled.div`
  width: 32px;
  height: 6px;
  margin-left: -9px;
  border-radius: 2px;
  background-color: ${color_lines};
  transform: ${({ open }) => (open ? "translateX(-100px)" : "translateX(0)")};
  transition: all 0.3s;
`;

export const Line3 = styled.div`
  width: 40px;
  height: 6px;
  border-radius: 2px;
  background-color: ${color_lines};
  transform-origin: right;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  transition: all 0.3s;
`;

export const Profile = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.bg_back_d};
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #fff;

    & img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      overflow: hidden;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;
