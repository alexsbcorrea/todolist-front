import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "./styles";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import api from "../../api/api";

import Perfil from "../../assets/perfil.jpg";

export default function EditTask() {
  const { setFlashMessage } = useFlashMessage();
  const [task, setTask] = useState({ description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

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

  //function RemoveTask(id, description) {}

  useEffect(() => {
    api
      .get(`/tasks/view/${id}`)
      .then((response) => {
        setTask(response.data.task);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log("Falha ao buscar dados.");
      });
  }, []);

  function UpdateTask(e) {
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
      .patch("/tasks/update", task)
      .then((response) => response.data)
      .then((data) => {
        setFlashMessage("success", data.message, 3000, "popup");
      })
      .catch((err) => {
        console.log(err.message);
        setFlashMessage("error", "Tente novamente mais tarde.", 3000, "popup");
      });
  }

  return (
    <Container>
      <form action="">
        <h1>To Do List</h1>
        <p>EDITAR TAREFA</p>
        <span></span>
        <div>
          <label htmlFor="">Descrição:</label>
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
          <select
            name="categorie"
            id="categorie"
            onChange={handleSelect}
            value={task.categorie}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <button type="button" onClick={UpdateTask}>
          SALVAR ALTERAÇÕES
        </button>
      </form>
    </Container>
  );
}
