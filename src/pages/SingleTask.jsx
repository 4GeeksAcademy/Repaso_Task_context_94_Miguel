// src/pages/SingleTask.js
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SingleTask = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    
    const task = store.todos.find(todo => todo.id === parseInt(id));

    if (!task) return <div>Task not found</div>;

    return (
        <div className="container">
            <div className="card" style={{ background: task.background }}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <button 
                        className="btn btn-success"
                        onClick={() => dispatch({
                            type: "add_task",
                            payload: { id: task.id, color: '#ffa500' }
                        })}
                    >
                        Change Color
                    </button>
                </div>
            </div>
            <br />
            <Link to="/tasks">
                <button className="btn btn-primary">Back to tasks</button>
            </Link>
        </div>
    );
};