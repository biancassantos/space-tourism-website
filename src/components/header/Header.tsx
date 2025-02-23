import { NavLink } from "react-router";
import HeaderMenu from "./HeaderMenu";
import MobileMenuButton from "./MobileMenuButton";
import "../style.css";

function Header() {
  return (
    <header className="max">
      <div className="header-container max">
        <NavLink to="/space-tourism-website/">
          <img src="imgs/shared/logo.svg" alt="Logo" />
        </NavLink>
        <hr />
        <MobileMenuButton />
        <HeaderMenu />
      </div>
    </header>
  )
}

export default Header;