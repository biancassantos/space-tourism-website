import { NavLink } from "react-router";
import "../style.css";

function DestinationMenu() {
  return (
    <nav className="destination-menu">
      <ul>
        <li>
          <NavLink to="/space-tourism-website/destination/moon">Moon</NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism-website/destination/mars">Mars</NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism-website/destination/europa">Europa</NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism-website/destination/titan">Titan</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DestinationMenu;