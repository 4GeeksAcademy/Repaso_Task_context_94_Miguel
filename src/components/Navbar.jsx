import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          TaskManager
        </Link>

        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          
          <Link to="/tasks" className="nav-link">
            Tasks
          </Link>
          
          <Link to="/add" className="nav-link">
            Add Task
          </Link>
        </div>
      </div>
    </nav>
  );
};