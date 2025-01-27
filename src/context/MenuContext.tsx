import { createContext, useState } from "react";

type MenuContextProviderProps = {
  children: React.ReactNode
}

type MenuContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextType | null>(null);

function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextProvider;