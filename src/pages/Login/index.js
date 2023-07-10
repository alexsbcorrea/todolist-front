import { useState, useContext } from "react";
import { Container } from "./styles";

import Perfil from "../../assets/perfil.jpg";

import { AuthContext } from "../../context/AuthContext";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import Loading from "../../components/Loading";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { Login } = useContext(AuthContext);
  const [visiblePassword, setVisiblePassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);

  function TogglePasswordVisible() {
    if (visiblePassword == "password") {
      setVisiblePassword("text");
    } else {
      setVisiblePassword("password");
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

  function LoginUser(e) {
    setIsLoading(true);
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
        <span>
          Esqueceu a Senha? <a href="/recoverypassword">&nbsp;Clique Aqui.</a>
        </span>
        <Loading loading={isLoading}></Loading>
        <button type="submit" onClick={LoginUser}>
          ENTRAR
        </button>
      </form>
    </Container>
  );
}
