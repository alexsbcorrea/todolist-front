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
    if (!user.email) {
      setFlashMessage(
        "error",
        "Insira o e-mail para continuar.",
        3000,
        "popup"
      );
      return;
    }

    try {
      const response = await api.patch("/users/recoverpassword", user);
      setFlashMessage("success", "Código enviado por E-mail.", 2000, "popup");
      setTimeout(() => {
        navigate("/createnewpassword");
      }, 2000);
    } catch (error) {
      setFlashMessage("error", "Usuário não encontrado.", 3000, "popup");
    }
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
        <button type="submit" onClick={() => navigate("/createnewpassword")}>
          JÁ TENHO O CÓDIGO
        </button>
      </form>
    </Container>
  );
}
