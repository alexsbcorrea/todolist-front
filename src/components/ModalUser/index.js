import * as C from "./styles";

export default function ModalUser({ user, email, modal, logout }) {
  return (
    <C.Container modal={modal}>
      <C.InfoUser>
        <h2>Bem vindo {user}</h2>
        <p>{email}</p>
      </C.InfoUser>
      <C.Comands>
        <a href="/profile">Editar Perfil</a>
        <a href="" onClick={logout}>
          Logout
        </a>
      </C.Comands>
      <C.Dashboard>
        <p></p>
        <h2></h2>
      </C.Dashboard>
      <C.Tasks>
        <div>
          <p></p>
          <h2></h2>
        </div>
        <div>
          <p></p>
          <h2></h2>
        </div>
      </C.Tasks>
    </C.Container>
  );
}
