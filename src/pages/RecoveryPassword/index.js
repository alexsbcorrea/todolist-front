import { useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";

import api from "../../api/api";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

export default function RecoveryPassword() {
  const [user, setUser] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  function handleChange(e) {
    setUser((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function GetCodePassword(e) {
    e.preventDefault();
    const response = await api.patch("/users/recoverpassword", user);

    if (response.status == 200) {
      navigate("/createnewpassword");
    }
    console.log(response.status);
  }

  return (
    <Container>
      <form action="">
        <h1>To Do List</h1>
        <p>RECUPERAÇÃO DE SENHA</p>
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

        <Loading loading={isLoading}></Loading>
        <button type="submit" onClick={GetCodePassword}>
          RECUPERAR SENHA
        </button>
      </form>
    </Container>
  );
}
