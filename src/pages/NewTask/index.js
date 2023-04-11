import { useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import api from "../../api/api";

import Perfil from "../../assets/perfil.jpg";

export default function NewTask() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();
  const [task, setTask] = useState({});
  const [message, setMessage] = useState();
  const { token } = JSON.parse(localStorage.getItem("userTD")) || "";

  function handleChange(e) {
    setTask((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSelect(e) {
    setTask((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.options[e.target.selectedIndex].text,
      };
    });
  }

  function CreateNewTask(e) {
    e.preventDefault();

    if (!task.description) {
      setFlashMessage("error", `A Descrição é obrigatória.`, 3000, "popup");
      return;
    }
    if (!task.date) {
      setFlashMessage("error", `A Data é obrigatória.`, 3000, "popup");
      return;
    }
    if (!task.time) {
      setFlashMessage("error", `O Horário é obrigatório.`, 3000, "popup");
      return;
    }
    if (!task.categorie) {
      setFlashMessage("error", `A Categoria é obrigatória.`, 3000, "popup");
      return;
    }

    api
      .post("/tasks/create", task)
      .then((response) => response.data)
      .then((data) => {
        setMessage(data.message);
        setFlashMessage("success", data.message, 3000, "popup");
        setTimeout(() => {
          setTask({});
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Container>
      <form action="">
        <h1>To Do List</h1>
        <p>NOVA TAREFA</p>
        <span>O que tem pra hoje?</span>
        <div>
          <label htmlFor="">O que precisa ser feito?</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            value={task.description || ""}
          />
        </div>
        <div>
          <label htmlFor="">Local:</label>
          <input
            type="text"
            name="local"
            id="local"
            onChange={handleChange}
            value={task.local || ""}
          />
        </div>
        <section>
          <div>
            <label htmlFor="">Data:</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
              value={task.date || ""}
            />
          </div>
          <div>
            <label htmlFor="">Horário:</label>
            <input
              type="time"
              name="time"
              id="time"
              onChange={handleChange}
              value={task.time || ""}
            />
          </div>
        </section>

        <div>
          <label htmlFor="">Categoria:</label>
          <select name="categorie" id="categorie" onChange={handleSelect}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <button type="submit" onClick={CreateNewTask}>
          CRIAR TAREFA
        </button>
      </form>
    </Container>
  );
}
