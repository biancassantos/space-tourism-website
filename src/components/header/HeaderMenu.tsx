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
          url="/space-tourism-website/"
          number="00"
          text="Home"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/space-tourism-website/destination"
          number="01"
          text="Destination"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/space-tourism-website/crew"
          number="02"
          text="Crew"
          />
        </li>
        <li>
          <HeaderMenuLink 
          url="/space-tourism-website/technology"
          number="03"
          text="Technology"
          />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu;