import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../useFlashMessage/useFlashMessage";

import api from "../api/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const { setFlashMessage } = useFlashMessage();
  const [userTD, setUserTD] = useState(localStorage.getItem("userTD") || "");
  const [emailTD, setEmailTD] = useState(localStorage.getItem("emailTD") || "");
  const [imageTD, setImageTD] = useState(localStorage.getItem("imageTD") || "");
  const [imageIdTD, setImageIdTD] = useState(
    localStorage.getItem("imageIdTD") || ""
  );
  const [tokenTD, setTokenTD] = useState(localStorage.getItem("tokenTD") || "");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userTD", userTD);
  }, [userTD]);
  useEffect(() => {
    localStorage.setItem("emailTD", emailTD);
  }, [emailTD]);
  useEffect(() => {
    localStorage.setItem("imageTD", imageTD);
  }, [imageTD]);
  useEffect(() => {
    localStorage.setItem("imageIdTD", imageIdTD);
  }, [imageIdTD]);
  useEffect(() => {
    localStorage.setItem("tokenTD", tokenTD);
  }, [tokenTD]);

  function Register(user) {
    if (!user.firstname) {
      setFlashMessage("error", `O Nome é obrigatório`, 5000, "popup");
      return;
    }
    if (!user.lastname) {
      setFlashMessage("error", `O Sobrenome é obrigatório`, 5000, "popup");
      return;
    }
    if (!user.email) {
      setFlashMessage("error", `O E-mail é obrigatório`, 5000, "popup");
      return;
    }
    if (!user.password) {
      setFlashMessage("error", `A Senha é obrigatória`, 5000, "popup");
      return;
    }
    if (!user.confirmPassword) {
      setFlashMessage("error", `Digite a Confirmação de Senha.`, 5000, "popup");
      return;
    }
    if (user.password != user.confirmPassword) {
      setFlashMessage("error", `As senhas não conferem.`, 5000, "popup");
      return;
    }
    if (!user.acceptterms) {
      setFlashMessage(
        "error",
        `Leia e aceite os Termos e Condições para continuar.`,
        5000,
        "popup"
      );
      return;
    }
    api
      .post("/users/register", user)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setUserTD(data.user);
        setEmailTD(data.email);
        setImageTD(data.image);
        setImageIdTD(data.imageId);
        setTokenTD(data.token);
        setFlashMessage("success", `Bem vindo(a) ${data.user}`, 5000, "popup");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setFlashMessage("error", err.message, 5000, "popup");
      });
  }

  function Login(user) {
    if (!user.email) {
      setFlashMessage("error", `O E-mail é obrigatório`, 5000, "popup");
      return;
    }
    if (!user.password) {
      setFlashMessage("error", `A Senha é obrigatória`, 5000, "popup");
      return;
    }
    api
      .post("/users/login", user)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setUserTD(data.user);
        setEmailTD(data.email);
        setImageTD(data.image);
        setImageIdTD(data.imageId);
        setTokenTD(data.token);
        if (data.message == "Usuário ou senha incorretos.") {
          setFlashMessage("error", `${data.message}`, 5000, "popup");
        } else {
          navigate("/tasks");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setFlashMessage("error", `Usuário ou Senha incorretos`, 5000, "popup");
      });
  }

  function Logout() {
    setUserTD("");
    setEmailTD("");
    setImageTD("");
    setImageIdTD("");
    setTokenTD("");
    localStorage.removeItem("userTD");
    localStorage.removeItem("emailTD");
    localStorage.removeItem("imageTD");
    localStorage.removeItem("imageIdTD");
    localStorage.removeItem("tokenTD");

    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        Register,
        Login,
        Logout,
        userTD,
        emailTD,
        imageTD,
        imageIdTD,
        tokenTD,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
