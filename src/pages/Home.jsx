import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">Welcome to Task Manager</h1>
      
      <div className="row">
        <div className="col-md-6">
          <div 
            className="card mb-3 h-100 cursor-pointer" 
            onClick={() => navigate("/tasks")}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h2 className="card-title h4 mb-3">View Tasks</h2>
              <p className="card-text text-muted">Manage your existing tasks</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div 
            className="card mb-3 h-100 cursor-pointer" 
            onClick={() => navigate("/add")}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body text-center">
              <h2 className="card-title h4 mb-3">Add New Task</h2>
              <p className="card-text text-muted">Create a new task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};