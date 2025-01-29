import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function useMenuContext() {
  /* allow us to use the menu context as a hook */
  return useContext(MenuContext);
}

export default useMenuContext;