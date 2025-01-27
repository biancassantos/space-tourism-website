import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function useMenuContext() {
  return useContext(MenuContext)
}

export default useMenuContext;