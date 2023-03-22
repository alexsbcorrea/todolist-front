import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.bg_navbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${(props) => props.theme.bg_back_d};
  box-sizing: border-box;
  margin-bottom: 0px;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 5px;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.t_main};
    padding: 10px 15px;
    transition: 0.3s;
    border-radius: 15px;
    font-weight: 500;
  }

  & a:hover {
    background-color: ${(props) => props.theme.bg_back_d};
    border-radius: 15px;
  }
`;

export const Profile = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.bg_back_d};
  margin-right: 40px;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 60px;
    height: 60px;
    border-radius: 100%;

    & img {
      width: 100%;
      border-radius: inherit;
    }
  }
`;
