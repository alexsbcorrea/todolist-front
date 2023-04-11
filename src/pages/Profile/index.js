import { useState, useEffect } from "react";
import { Container, FotoPerfil } from "./styles";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import api from "../../api/api";
import PerfilDefatult from "../../assets/perfil.jpg";

export default function Profile() {
  const { setFlashMessage } = useFlashMessage();
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [photo, setPhoto] = useState();
  const [update, setUpdate] = useState(false);
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

  useEffect(() => {
    api.get("/users/profile").then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/users/profile").then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
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
        localStorage.removeItem("image2");
        localStorage.setItem("image2", JSON.stringify(response.data.image));

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
          "Servidor Gratuito: Funcionalidade Indisponível",
          5000,
          "popup"
        );
      });
  }

  function UpdateProfile(e) {
    e.preventDefault();

    if (!user.firstname) {
      setFlashMessage("error", `O Nome é obrigatório.`, 5000, "popup");
      return;
    }
    if (!user.lastname) {
      setFlashMessage("error", `O Sobrenome é obrigatório.`, 5000, "popup");
      return;
    }

    if (user.password != user.confirmPassword) {
      setFlashMessage("error", `As senhas não conferem.`, 5000, "popup");
      return;
    }

    api
      .patch(`/users/edit/${user.id}`, user)
      .then((response) => {
        setUpdate(!update);
        setFlashMessage(
          "success",
          "Perfil atualizado com sucesso",
          5000,
          "popup"
        );
      })
      .catch((erro) => {
        console.log(erro);
        setFlashMessage(
          "error",
          "Não foi possível atualizar as informações, tente novamente mais tarde",
          5000,
          "popup"
        );
      });
  }

  const Perfil = `${process.env.REACT_APP_API}/img/users/${user.image}` || "";

  return (
    <Container>
      <form action="">
        <FotoPerfil>
          <img
            src={preview ? URL.createObjectURL(preview) : PerfilDefatult}
            alt="Foto de Perfil"
          />
        </FotoPerfil>
        <div>
          <form>
            <input
              type="file"
              name="image"
              id="image"
              onChange={onFileChange}
            />
            {preview ? (
              <button type="submit" onClick={SendPhoto}>
                Alterar Foto
              </button>
            ) : (
              <p></p>
            )}
          </form>
        </div>
        <section>
          <div>
            <label htmlFor="firstname">Primeiro Nome:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={handleChange}
              value={user.firstname || ""}
            />
          </div>
          <div>
            <label htmlFor="">Último Nome:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
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
            id="email"
            onChange={handleChange}
            value={user.email || ""}
            disabled
          />
        </div>
        <div>
          <label htmlFor="">Senha:</label>
          <input
            type={visiblePassword}
            name="password"
            id="password"
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

        <button type="submit" onClick={UpdateProfile}>
          SALVAR ALTERAÇÕES
        </button>
      </form>
    </Container>
  );
}
