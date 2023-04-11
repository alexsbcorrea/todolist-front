import { useContext, useState } from "react";
import { Container } from "./styles";

import { AuthContext } from "../../context/AuthContext";

import Perfil from "../../assets/perfil.jpg";
import NavBar from "../../components/NavBarH";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Register() {
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState("");
  const { Register } = useContext(AuthContext);
  const [visiblePassword, setVisiblePassword] = useState("password");
  const [visibleConfPassword, setVisibleConfPassword] = useState("password");

  function TogglePasswordVisible() {
    if (visiblePassword == "password") {
      setVisiblePassword("text");
    } else {
      setVisiblePassword("password");
    }
  }

  function ToggleConfPasswordVisible() {
    if (visibleConfPassword == "password") {
      setVisibleConfPassword("text");
    } else {
      setVisibleConfPassword("password");
    }
  }

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
            type={visiblePassword}
            name="password"
            onChange={handleChange}
            value={user.password || ""}
          />
          {visiblePassword == "password" ? (
            <AiOutlineEye
              size={25}
              className="password"
              onClick={TogglePasswordVisible}
            ></AiOutlineEye>
          ) : (
            <AiOutlineEyeInvisible
              onClick={TogglePasswordVisible}
              size={25}
              className="password"
            ></AiOutlineEyeInvisible>
          )}
        </div>
        <div>
          <label htmlFor="">Confirmar Senha:</label>
          <input
            type={visibleConfPassword}
            name="confirmPassword"
            onChange={handleChange}
            value={user.confirmPassword || ""}
          />
          {visibleConfPassword == "password" ? (
            <AiOutlineEye
              size={25}
              className="password"
              onClick={ToggleConfPasswordVisible}
            ></AiOutlineEye>
          ) : (
            <AiOutlineEyeInvisible
              onClick={ToggleConfPasswordVisible}
              size={25}
              className="password"
            ></AiOutlineEyeInvisible>
          )}
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
