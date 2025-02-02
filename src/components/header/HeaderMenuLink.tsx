import { NavLink } from "react-router";
import useMenuContext from "../../hooks/useMenuContext";

type HeaderMenuLinkProps = {
  url: string
  number: string
  text: string
}

function HeaderMenuLink({ url, number, text }: HeaderMenuLinkProps) {
  const menuContext = useMenuContext();
  if (!menuContext) return null;
  const { setIsOpen } = menuContext;

  /* checks if we are in the homepage */
  const isHome = url === "/space-tourism-website/";

  return (
    <NavLink
    to={url}
    end={isHome} /* sets absolute path to the url if we are in the home page */
    onClick={() => setIsOpen(false)}
    >
      <strong>{number}</strong> {text}
    </NavLink>
  )
}

export default HeaderMenuLink;