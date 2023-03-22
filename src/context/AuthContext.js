import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../useFlashMessage/useFlashMessage";

import api from "../api/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const { setFlashMessage } = useFlashMessage();
  const [userTD, setUserTD] = useState(
    JSON.parse(localStorage.getItem("userTD")) || {}
  );
  const navigate = useNavigate();

  useEffect(() => {
    //localStorage.removeItem("userTD");
    localStorage.setItem("userTD", JSON.stringify(userTD));
    localStorage.setItem("image", JSON.stringify(userTD.image));
  }, [userTD]);

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
        setUserTD({
          user: data.user,
          email: data.email,
          image: data.image,
          token: data.token,
        });
        setFlashMessage("success", `Bem vindo(a) ${data.user}`, 5000, "popup");
        setTimeout(() => {
          navigate("/");
        }, 5000);
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
        setUserTD({
          user: data.user,
          email: data.email,
          image: data.image,
          token: data.token,
        });
        if (data.message == "Usuário ou senha incorretos.") {
          setFlashMessage("error", `${data.message}`, 5000, "popup");
        } else {
          setFlashMessage("success", `${data.message}`, 5000, "popup");
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setFlashMessage("error", `Usuário ou Senha incorretos`, 5000, "popup");
      });
  }

  function Logout() {
    setUserTD({});
    localStorage.removeItem("userTD");
    localStorage.removeItem("image");
    navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ Register, Login, Logout, userTD }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
