import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFlashMessage from "../../useFlashMessage/useFlashMessage";

import { Container, CardTask, Details, Commands } from "./styles";

import Task from "../../components/CardTask";
import Filters from "../../components/Filters";
import Search from "../../components/Search";
import Loading from "../../components/Loading";

import api from "../../api/api";

export default function AllTasks() {
  const { setFlashMessage } = useFlashMessage();
  const [updateTask, setUpdateTask] = useState(false);
  const [tasks, setTasks] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function SetClosed(id, description) {
    api
      .patch(`/tasks/close/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })

      .catch((err) => {
        console.log("Falha");
        setFlashMessage(
          "error",
          "Falha ao finalizar tarefa. Tente novamente mais tarde.",
          2000,
          "toast"
        );
      });
  }

  function SetOpen(id, description) {
    api
      .patch(`/tasks/open/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })
      .catch((err) => {
        console.log("Falha");
        setFlashMessage(
          "error",
          "Falha ao reabrir tarefa. Tente novamente mais tarde.",
          3000,
          "toast"
        );
      });
  }

  function RemoveTask(id, description) {
    api
      .delete(`/tasks/remove/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })
      .catch((err) => {
        console.log("Falha");
        setFlashMessage(
          "error",
          "Falha ao excluir tarefa. Tente novamente mais tarde.",
          3000,
          "toast"
        );
      });
  }

  function EditTask(id) {
    navigate(`/tasks/edit/${id}`);
  }

  function GetTasks() {
    setIsLoading(true);
    api
      .get("/tasks/all")
      .then((response) => response.data)
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch((erro) => {
        console.log("Falha ao buscar dados.");
        console.log(erro.toJSON());
        setIsLoading(false);
      });
  }

  useEffect(() => {
    GetTasks();
  }, []);

  useEffect(() => {
    GetTasks();
  }, [updateTask]);

  return (
    <Container>
      <h1>Todas as Tarefas</h1>

      <Loading
        loading={isLoading}
        colorBase="#232C3D"
        colorLine="#FFFFFF"
      ></Loading>

      {tasks.tasks?.length > 0 ? (
        <div>
          <Search
            value={search}
            handleChange={(e) => setSearch(e.target.value)}
          ></Search>
          <Filters
            filter={filter}
            handleClick={(e) => setFilter(e.target.id)}
          ></Filters>
          <p>
            Resultado:{" "}
            {
              tasks.tasks
                ?.filter((task) =>
                  filter ? task.categorie === filter : task.categorie.length > 0
                )
                .filter((task) =>
                  search
                    ? task.description
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    : task.description.length > 0
                ).length
            }{" "}
            Tarefa(s).
          </p>
        </div>
      ) : (
        <div>
          <p>
            Você não possui tarefas criadas.{" "}
            <a href="/tasks/new">Adicionar Nova.</a>
          </p>
        </div>
      )}

      {tasks.tasks
        ?.filter((task) =>
          filter ? task.categorie === filter : task.categorie.length > 0
        )
        .filter((task) =>
          search
            ? task.description
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            : task.description.length > 0
        )
        .map((task) => {
          return (
            <Task
              key={task.id || ""}
              id={task?.id || ""}
              description={task.description || ""}
              local={task.local || ""}
              date={task.date || ""}
              time={task.time || ""}
              categorie={task?.categorie || ""}
              isClosed={task?.isClosed || ""}
              open={SetOpen}
              closed={SetClosed}
              remove={RemoveTask}
              edit={EditTask}
            ></Task>
          );
        })}
    </Container>
  );
}
