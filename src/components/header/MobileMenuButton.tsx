import useMenuContext from "../../hooks/useMenuContext";

function MobileMenuButton() {
  const menuContext = useMenuContext();
  if (!menuContext) return null;
  const { setIsOpen } = menuContext;

  return (
    <button
    onClick={() => setIsOpen(true)}
    className="mobile-menu-btn"
    >
      <img src="imgs/shared/icon-hamburger.svg" alt="Hamburger menu icon" />
    </button>
  )
}

export default MobileMenuButton;