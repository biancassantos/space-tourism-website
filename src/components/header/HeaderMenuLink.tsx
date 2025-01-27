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

  return (
    <NavLink
    to={url}
    onClick={() => setIsOpen(false)}
    >
      <strong>{number}</strong> {text}
    </NavLink>
  )
}

export default HeaderMenuLink;