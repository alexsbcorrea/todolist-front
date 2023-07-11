import { useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";
import Loading from "../../components/Loading";

import api from "../../api/api";

import Perfil from "../../assets/perfil.jpg";

export default function NewTask() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();
  const [task, setTask] = useState({});
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    e.preventDefault();

    if (!task.description) {
      setFlashMessage("error", `A Descrição é obrigatória.`, 3000, "popup");
      setIsLoading(false);
      return;
    }
    if (!task.date) {
      setFlashMessage("error", `A Data é obrigatória.`, 3000, "popup");
      setIsLoading(false);
      return;
    }
    if (!task.time) {
      setFlashMessage("error", `O Horário é obrigatório.`, 3000, "popup");
      setIsLoading(false);
      return;
    }
    if (!task.categorie) {
      setFlashMessage("error", `A Categoria é obrigatória.`, 3000, "popup");
      setIsLoading(false);
      return;
    }

    api
      .post("/tasks/create", task)
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        setMessage(data.message);
        setFlashMessage("success", data.message, 3000, "popup");
        setTimeout(() => {
          setTask({});
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
        setFlashMessage(
          "error",
          "Erro no Servidor, tente novamente mais tarde.",
          3000,
          "popup"
        );
        setIsLoading(false);
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

        <Loading
          loading={isLoading}
          colorBase="#fff"
          colorLine="#1E73BE"
        ></Loading>

        <button type="submit" onClick={CreateNewTask}>
          CRIAR TAREFA
        </button>
      </form>
    </Container>
  );
}
