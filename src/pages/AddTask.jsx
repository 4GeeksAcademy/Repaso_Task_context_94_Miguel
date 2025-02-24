// src/pages/AddTask.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddTask = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch({
        type: "add_new_task",
        payload: { title },
      });

      alert("Nueva tarea creada");
      navigate("/tasks");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      alert("Error al crear la tarea");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título de la tarea"
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/tasks">
            <button type="button" className="btn btn-primary">
              Back to tasks
            </button>
          </Link>
          <button type="submit" className="btn btn-success">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
