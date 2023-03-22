import { useState, useEffect } from "react";
import { Container, FotoPerfil } from "./styles";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import api from "../../api/api";
import TempPerfil from "../../assets/perfil.jpg";

export default function Profile() {
  const { setFlashMessage } = useFlashMessage();
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [photo, setPhoto] = useState();
  const [update, setUpdate] = useState(false);

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
          "Selecione um arquivo .jpg ou .png e tente novamente.",
          10000,
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
            src={preview ? URL.createObjectURL(preview) : Perfil}
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
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            value={user.password || ""}
          />
        </div>
        <div>
          <label htmlFor="">Confirmar Senha:</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={user.confirmPassword || ""}
          />
        </div>

        <button type="submit" onClick={UpdateProfile}>
          SALVAR ALTERAÇÕES
        </button>
      </form>
    </Container>
  );
}
