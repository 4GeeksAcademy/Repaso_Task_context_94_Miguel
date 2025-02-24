// src/pages/TaskList.js
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const TaskList = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="container">
            <ul className="list-group">
                {store && store.todos?.map((item) => (
                    <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between"
                        style={{ background: item.background }}
                    >
                        <Link to={"/single/" + item.id}>
                            Link to: {item.title}
                        </Link>

                        <div>
                            <button 
                                className="btn btn-success"
                                onClick={() => dispatch({
                                    type: "add_task",
                                    payload: { id: item.id, color: '#ffa500' }
                                })}
                            >
                                Change Color
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <br />
            <div className="d-flex justify-content-between">
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
                <Link to="/add">
                    <button className="btn btn-success">Add New Task</button>
                </Link>
            </div>
        </div>
    );
};