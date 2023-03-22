import { useContext, useState } from "react";
import { Container } from "./styles";

import { AuthContext } from "../../context/AuthContext";

import Perfil from "../../assets/perfil.jpg";

export default function Register() {
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState("");
  const { Register } = useContext(AuthContext);

  function handleChange(e) {
    setUser((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  function checkboxChange(e) {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setUser((prevstate) => {
        return {
          ...prevstate,
          acceptterms: "true",
        };
      });
    } else {
      setUser((prevstate) => {
        return {
          ...prevstate,
          acceptterms: "false",
        };
      });
    }
  }

  function RegisterUser(e) {
    e.preventDefault();
    Register(user);
  }

  return (
    <Container>
      <form action="">
        <h1>To Do List</h1>
        <p>REGISTRO</p>
        <span>
          Já possui Conta?&nbsp;<a href="/login">Acessar.</a>
        </span>
        <section>
          <div>
            <label htmlFor="">Primeiro Nome:</label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              value={user.firstname || ""}
            />
          </div>
          <div>
            <label htmlFor="">Último Nome:</label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              value={user.lastname || ""}
            />
          </div>
        </section>
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
            type="text"
            name="password"
            onChange={handleChange}
            value={user.password || ""}
          />
        </div>
        <div>
          <label htmlFor="">Confirmar Senha:</label>
          <input
            type="text"
            name="confirmPassword"
            onChange={handleChange}
            value={user.confirmPassword || ""}
          />
        </div>
        <span>
          <input
            type="checkbox"
            name="acceptterms"
            id="acceptterms"
            onChange={checkboxChange}
          />
          Eu li e aceito os <a href="">&nbsp;termos e condições.</a>
        </span>
        <button type="submit" onClick={RegisterUser}>
          CRIAR CONTA
        </button>
      </form>
    </Container>
  );
}
