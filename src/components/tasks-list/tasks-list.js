import React, { useState, useEffect } from "react";
import "./tasks-list.css";
import Navegation from "../navegation/Navegation";

function TaskLists() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState("all"); // Filtro de tareas (all, completed, pending)

  // useEffect para cargar las tareas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
  }, []);

  // useEffect para guardar las tareas en localStorage cada vez que cambian
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]); 
      setTask("");
    }
  };

  // Función para marcar una tarea como completada
  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="App">
      <Navegation/>
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Escribe una nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <div className="filter-container">
        <button
          onClick={() => handleFilterChange("all")}
          className={filter === "all" ? "active" : ""}
        >
          Todas
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completadas
        </button>
        <button
          onClick={() => handleFilterChange("pending")}
          className={filter === "pending" ? "active" : ""}
        >
          Pendientes
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
            <div>
              <button onClick={() => handleDeleteTask(task.id)}>
                Eliminar
              </button>
              <button onClick={() => handleCompleteTask(task.id)}>
                Completado
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskLists;