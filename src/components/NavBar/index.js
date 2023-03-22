import { Header, Logo, Menu, Profile } from "./styles";

import LogoMarca from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";

export default function NavBar() {
  return (
    <Header>
      <Logo>
        <img src={LogoMarca} alt="Logo" />
      </Logo>
      <Menu>
        <li>
          <a href="/">Página Inicial</a>
        </li>
        <li>
          <a href="/register">Cadastre-se</a>
        </li>
        <li>
          <a href="/login">Entrar</a>
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
        <Profile>
          <div>
            <img src={Perfil} alt="Foto de Perfil" />
          </div>
        </Profile>
      </Menu>
    </Header>
  );
}
