import { useState, useContext } from "react";
import * as C from "./styles";

import { AuthContext } from "../../context/AuthContext";

import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";
import ModalUser from "../ModalUser";
import { CgProfile } from "react-icons/cg";

import Search from "../Search";

import PerfilDefatult from "../../assets/perfil.jpg";

export default function NavbarH() {
  const { Logout, userTD, emailTD, tokenTD, imageIdTD } =
    useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("image2"))
  );

  function ModalMenu() {
    setOpen(!open);
    localStorage.setItem("modalMenu", open);
  }

  function LogoutUser() {
    setOpen(false);
    Logout();
  }

  let Perfil = imageIdTD
    ? `https://drive.google.com/uc?export=view&id=${imageIdTD}`
    : PerfilDefatult;

  if (Perfil === undefined || Perfil === null) {
    console.log(Perfil);
    Perfil = PerfilDefatult;
  }

  if (tokenTD) {
    return (
      <C.ContainerMenu>
        <C.Hamburguer open={open} onClick={ModalMenu}>
          <C.Line1 open={open}></C.Line1>
          <C.Line2 open={open}></C.Line2>
          <C.Line3 open={open}></C.Line3>
        </C.Hamburguer>
        <C.Logo>
          <C.LogoImg src={Logo} alt="" />
        </C.Logo>

        <C.ItemsMenu open={open}>
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
          <li>
            <a onClick={LogoutUser}>Logout</a>
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
            email={emailTD}
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
          <C.LogoImg src={Logo} alt="Logo" />
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
