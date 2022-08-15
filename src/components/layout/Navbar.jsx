import "./Layout.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-brand">
        <Link to="/" className="nav-brand-link">
          <span>My </span>
          <span>React</span>
          <br />
          <span>Project</span>
        </Link>
      </div>
      <label htmlFor="nav-toggle-btn" className="show-menu-btn">
        <i className="bi bi-caret-down-fill"></i>
      </label>
      <input type="checkbox" id="nav-toggle-btn" />
      <div className="nav-links-section">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              <i className="bi bi-incognito"></i>
              <span>About</span>
            </Link>
          </li>
          <li>
            <div className="dropdown-links">
              <button className="dropbtn">
                <i className="bi bi-app-indicator"></i>
                Apps
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/todo" className="nav-link">
                  <i className="bi bi-check-square"></i>
                  <span>ToDo</span>
                </Link>
                <Link to="/calendar" className="nav-link">
                  <i className="bi bi-calendar2-date"></i>
                  <span>Calendar</span>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-links">
              <button className="dropbtn">
                <i className="bi bi-diagram-3-fill"></i>
                Charts
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/line" className="nav-link">
                  <i className="bi bi-graph-up"></i>
                  <span>Line</span>
                </Link>
                <Link to="/pyramid" className="nav-link">
                  <i className="bi bi-triangle-half"></i>
                  <span>Pyramid</span>
                </Link>
                <Link to="/column" className="nav-link">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  <span>Column</span>
                </Link>
              </div>
            </div>
          </li>
          <label htmlFor="nav-toggle-btn" className="hide-menu-btn">
            <i className="bi bi-x"></i>
          </label>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
