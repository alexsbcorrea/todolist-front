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

export default function ChangePassword() {
  const navigation = useNavigate();
  const { imageIdTD } = useContext(AuthContext);
  const { setFlashMessage } = useFlashMessage();
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [photo, setPhoto] = useState();
  const [update, setUpdate] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState("password");
  const [visibleConfPassword, setVisibleConfPassword] = useState("password");
  const [visibleCurrentPassword, setVisibleCurrentPassword] =
    useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);

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

  function ToggleCurrentPassword() {
    if (visibleCurrentPassword == "password") {
      setVisibleCurrentPassword("text");
    } else {
      setVisibleCurrentPassword("password");
    }
  }
  function GetProfile() {
    setIsLoading(true);
    api.get("/users/profile").then((response) => {
      setUser(response.data);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    GetProfile();
  }, []);

  useEffect(() => {
    GetProfile();
  }, [update]);

  function handleChange(e) {
    setUser((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setPhoto(e.target.files[0]);
  }

  function SendPhoto(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("image", photo);

    api
      .patch(`/users/changephoto/${user.id}`, data)
      .then((response) => {
        localStorage.removeItem("imageTD");
        localStorage.removeItem("imageIdTD");
        localStorage.setItem("imageTD", response.data.image);
        localStorage.setItem("imageIdTD", response.data.imageId);

        setFlashMessage(
          "success",
          "Foto de Perfil atualizada com sucesso",
          3000,
          "popup"
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((erro) => {
        console.log("Falha");
        setFlashMessage(
          "error",
          "Erro no Servidor, tente novamente mais tarde.",
          5000,
          "popup"
        );
      });
  }

  async function UpdateProfile(e) {
    e.preventDefault();

    try {
      const response = await api.patch(
        `/users/changepassword/${user.id}`,
        user
      );
      setFlashMessage("success", "Senha alterada com sucesso.", 5000, "popup");
    } catch (error) {
      console.log(error.response.data.message);
      setFlashMessage("error", `${error.response.data.message}`, 5000, "popup");
    }
  }

  let Perfil = imageIdTD
    ? `https://drive.google.com/uc?export=view&id=${imageIdTD}`
    : PerfilDefatult;

  return (
    <Container>
      <form action="">
        <div>
          <label htmlFor="">Senha Atual:</label>
          <input
            type={visibleCurrentPassword}
            name="currentPassword"
            id="currentPassword"
            onChange={handleChange}
            value={user.currentPassword || ""}
          />
          {visibleCurrentPassword == "password" ? (
            <AiOutlineEye
              size={25}
              className="password"
              onClick={ToggleCurrentPassword}
            ></AiOutlineEye>
          ) : (
            <AiOutlineEyeInvisible
              onClick={ToggleCurrentPassword}
              size={25}
              className="password"
            ></AiOutlineEyeInvisible>
          )}
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

        <button type="submit" onClick={UpdateProfile}>
          ALTERAR SENHA
        </button>
        <button type="submit" onClick={() => navigation("/profile")}>
          VOLTAR
        </button>
      </form>
    </Container>
  );
}
