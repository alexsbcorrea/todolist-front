import { useState, useEffect, useContext } from "react";
import { Container, FotoPerfil } from "./styles";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import api from "../../api/api";
import PerfilDefatult from "../../assets/perfil.jpg";
import { AuthContext } from "../../context/AuthContext";

import Loading from "../../components/Loading";

export default function SetNewPassword() {
  const navigation = useNavigate();
  const { setFlashMessage } = useFlashMessage();
  const [user, setUser] = useState({});
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

  async function ChangePassword(e) {
    e.preventDefault();
    const response = await api.patch("/users/setnewpassword", user);
    console.log(response.status);
  }

  function handleChange(e) {
    setUser((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <Container>
      <form action="">
        <div>
          <label htmlFor="">Código de Verificação:</label>
          <input
            type={"text"}
            name="code"
            id="code"
            onChange={handleChange}
            value={user.code || ""}
          />
        </div>

        <div>
          <label htmlFor="">Nova Senha:</label>
          <input
            type={visiblePassword}
            name="newPassword"
            id="newPassword"
            onChange={handleChange}
            value={user.newPassword || ""}
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
          <label htmlFor="">Confirmar Nova Senha:</label>
          <input
            type={visibleConfPassword}
            name="confirmPassword"
            id="confirmPassword"
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

        <Loading></Loading>

        <button type="submit" onClick={ChangePassword}>
          ALTERAR SENHA
        </button>
        <button type="submit" onClick={() => navigation("/login")}>
          CANCELAR
        </button>
      </form>
    </Container>
  );
}
