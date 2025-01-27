import HeaderMenuLink from "./HeaderMenuLink";
import useMenuContext from "../../hooks/useMenuContext";
import CloseMenuButton from "./CloseMenuButton";
import "../style.css";

function HeaderMenu() {
  const menuContext = useMenuContext();
  if (!menuContext) return null;
  const { isOpen } = menuContext;

  return (
    <nav className={`header-menu ${isOpen ? "open" : ""}`}>
      <CloseMenuButton />
      <ul>
        <li>
          <HeaderMenuLink 
          url="/"
          number="00"
          text="Home"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/destination"
          number="01"
          text="Destination"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/crew"
          number="02"
          text="Crew"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/technology"
          number="03"
          text="Technology"
          />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu;