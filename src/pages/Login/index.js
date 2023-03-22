import { useState, useContext } from "react";
import { Container } from "./styles";

import Perfil from "../../assets/perfil.jpg";

import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { Login } = useContext(AuthContext);

  function handleChange(e) {
    setUser((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  function LoginUser(e) {
    e.preventDefault();
    Login(user);
  }

  return (
    <Container>
      <form action="">
        <h1>To Do List</h1>
        <p>LOGIN</p>
        <span>
          Ainda não possui Conta?&nbsp;<a href="/register">Cadastre-se.</a>
        </span>

        <div>
          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email || ""}
          />
        </div>
        <div>
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password || ""}
          />
        </div>
        <span>
          Esqueceu a Senha? <a href="">&nbsp;Clique Aqui.</a>
        </span>
        <button type="submit" onClick={LoginUser}>
          ENTRAR
        </button>
      </form>
    </Container>
  );
}
