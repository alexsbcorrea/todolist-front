import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api/api";

import { Container } from "./styles";

import Filters from "../../components/Filters";
import Search from "../../components/Search";

import Task from "../../components/CardTask";

export default function TasksPending() {
  const [updateTask, setUpdateTask] = useState(false);
  const [tasks, setTasks] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  function SetClosed(id) {
    api
      .patch(`/tasks/close/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })

      .catch((err) => {
        console.log("Falha");
      });
  }

  function SetOpen(id) {
    api
      .patch(`/tasks/open/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })
      .catch((err) => {
        console.log("Falha");
      });
  }

  function RemoveTask(id) {
    api
      .delete(`/tasks/remove/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateTask(!updateTask);
      })
      .catch((err) => {
        console.log("Falha");
      });
  }

  function EditTask(id) {
    navigate(`/tasks/edit/${id}`);
  }

  useEffect(() => {
    api
      .get("/tasks/pendings")
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((erro) => {
        console.log("Falha ao buscar dados.");
      });
  }, []);

  useEffect(() => {
    api
      .get("/tasks/pendings")
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((erro) => {
        console.log("Falha ao buscar dados.");
      });
  }, [updateTask]);

  return (
    <Container>
      <h1>Tarefas Pendentes</h1>

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
            Você não possui tarefas pendentes.{" "}
            <a href="/tasks/closed">Ver Concluídas.</a>
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
