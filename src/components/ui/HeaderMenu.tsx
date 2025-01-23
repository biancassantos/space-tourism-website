import { NavLink } from "react-router";
import "../style.css";

function HeaderMenu() {
  return (
    <nav className="header-menu">
      <ul>
        <li>
          <NavLink to="/">
            <strong>00</strong> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <strong>01</strong> Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <strong>02</strong> Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            <strong>03</strong> Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu;