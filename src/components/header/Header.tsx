import { NavLink } from "react-router";
import HeaderMenu from "./HeaderMenu";
import MobileMenuButton from "./MobileMenuButton";
import "../style.css";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src="imgs/shared/logo.svg" alt="Logo" />
      </NavLink>
      <hr />
      <MobileMenuButton />
      <HeaderMenu />
    </header>
  )
}

export default Header;