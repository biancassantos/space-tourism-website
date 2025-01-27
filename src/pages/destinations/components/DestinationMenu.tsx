import { NavLink } from "react-router";
import "../style.css";

function DestinationMenu() {
  return (
    <nav className="destination-menu">
      <ul>
        <li>
          <NavLink to="/destination/moon">Moon</NavLink>
        </li>
        <li>
          <NavLink to="/destination/mars">Mars</NavLink>
        </li>
        <li>
          <NavLink to="/destination/europa">Europa</NavLink>
        </li>
        <li>
          <NavLink to="/destination/titan">Titan</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DestinationMenu;