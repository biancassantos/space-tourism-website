import useMenuContext from "../../hooks/useMenuContext";

function CloseMenuButton() {
  const menuContext = useMenuContext();
  if (!menuContext) return null;
  const { setIsOpen } = menuContext;

  return (
    <button
    onClick={() => setIsOpen(false)}
    className="close-menu-btn"
    >
      <img src="imgs/shared/icon-close.svg" alt="Close menu button" />
    </button>
  )
}

export default CloseMenuButton;