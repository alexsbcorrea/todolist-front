import { useState, useContext } from "react";
import * as C from "./styles";

import { AuthContext } from "../../context/AuthContext";

import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";
import ModalUser from "../ModalUser";
import { CgProfile } from "react-icons/cg";

import Search from "../Search";

export default function NavbarH() {
  const { Logout, userTD } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("image2"))
  );

  function LogoutUser() {
    Logout();
  }

  const Perfil = `${process.env.REACT_APP_API}/img/users/${profile}` || "";

  if (userTD.token) {
    return (
      <C.ContainerMenu>
        <C.Hamburguer open={open} onClick={() => setOpen(!open)}>
          <C.Line1 open={open}></C.Line1>
          <C.Line2 open={open}></C.Line2>
          <C.Line3 open={open}></C.Line3>
        </C.Hamburguer>
        <C.Logo>
          <C.LogoImg src={Logo} alt="" />
        </C.Logo>

        <C.ItemsMenu open={open}>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/tasks">Todas as Tarefas</a>
          </li>
          <li>
            <a href="/tasks/pending">Pendentes</a>
          </li>
          <li>
            <a href="/tasks/closed">Concluídas</a>
          </li>
          <li>
            <a href="/tasks/new">Nova Tarefa</a>
          </li>
          <li>
            <a href="/profile" className="mobile specialButton">
              Editar Perfil
            </a>
          </li>
          <C.Profile onClick={() => setModal(!modal)}>
            <div>
              <img src={Perfil} />
            </div>
          </C.Profile>
          <ModalUser
            modal={modal}
            logout={LogoutUser}
            user={userTD}
          ></ModalUser>
        </C.ItemsMenu>
      </C.ContainerMenu>
    );
  } else {
    return (
      <C.ContainerMenu>
        <C.Hamburguer open={open} onClick={() => setOpen(!open)}>
          <C.Line1 open={open}></C.Line1>
          <C.Line2 open={open}></C.Line2>
          <C.Line3 open={open}></C.Line3>
        </C.Hamburguer>
        <C.Logo>
          <C.LogoImg src={Logo} alt="" />
        </C.Logo>

        <C.ItemsMenu open={open}>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
          <li>
            <a href="/register" className="specialButton">
              Cadastre-se
            </a>
          </li>
        </C.ItemsMenu>
      </C.ContainerMenu>
    );
  }
}
