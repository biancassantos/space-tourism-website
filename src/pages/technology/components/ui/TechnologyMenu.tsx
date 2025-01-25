import { NavLink } from "react-router";

function TechnologyMenu() {
  return (
    <nav className="technology-menu">
      <NavLink to="/technology/launch-vehicle">
        <button>1</button>
      </NavLink>
      <NavLink to="/technology/spaceport">
        <button>2</button>
      </NavLink>
      <NavLink to="/technology/space-capsule">
        <button>3</button>
      </NavLink>
    </nav>
  )
}

export default TechnologyMenu;