import { NavLink } from "react-router";
import HeaderMenu from "./ui/HeaderMenu";
import "./style.css";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src="imgs/shared/logo.svg" alt="Logo" />
      </NavLink>
      <hr />
      <HeaderMenu />
    </header>
  )
}

export default Header;