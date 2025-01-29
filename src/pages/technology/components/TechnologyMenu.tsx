import { NavLink } from "react-router";
import "../style.css";

function TechnologyMenu() {
  return (
    <nav className="technology-menu">
      <NavLink to="/space-tourism-website/technology/launch-vehicle">
        <button>1</button>
      </NavLink>
      <NavLink to="/space-tourism-website/technology/spaceport">
        <button>2</button>
      </NavLink>
      <NavLink to="/space-tourism-website/technology/space-capsule">
        <button>3</button>
      </NavLink>
    </nav>
  )
}

export default TechnologyMenu;