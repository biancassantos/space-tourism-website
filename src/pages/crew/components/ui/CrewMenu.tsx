import { NavLink } from "react-router";
import "../../style.css";

function CrewMenu() {
  return (
    <nav className="crew-menu">
      <NavLink to="/crew/douglas-hurley">
        <button></button>
      </NavLink>
      <NavLink to="/crew/mark-shuttleworth">
        <button></button>
      </NavLink>
      <NavLink to="/crew/victor-glover">
        <button></button>
      </NavLink>
      <NavLink to="/crew/anousheh-ansari">
        <button></button>
      </NavLink>
    </nav>
  )
}

export default CrewMenu;