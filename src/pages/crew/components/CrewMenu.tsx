import { NavLink } from "react-router";
import "../style.css";

function CrewMenu() {
  return (
    <nav className="crew-menu">
      <NavLink to="/space-tourism-website/crew/douglas-hurley">
        <button></button>
      </NavLink>
      <NavLink to="/space-tourism-website/crew/mark-shuttleworth">
        <button></button>
      </NavLink>
      <NavLink to="/space-tourism-website/crew/victor-glover">
        <button></button>
      </NavLink>
      <NavLink to="/space-tourism-website/crew/anousheh-ansari">
        <button></button>
      </NavLink>
    </nav>
  )
}

export default CrewMenu;