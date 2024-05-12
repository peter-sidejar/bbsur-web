import { ReactNode, createContext, useState, useContext } from 'react';

export type LayoutContextType = {
  mobileMenuOpened: boolean;
  setMobileMenuOpened: (value: boolean) => void;
};
const LayoutContext = createContext<LayoutContextType>({
  mobileMenuOpened: false,
  setMobileMenuOpened: () => {},
});

export function LayoutContextProvider({ children }: { children: ReactNode }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const mobileMenuHandler = (value: boolean) => {
    setMobileMenuOpened(value);
  };

  return (
    <LayoutContext.Provider
      value={{ mobileMenuOpened, setMobileMenuOpened: mobileMenuHandler }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  return context;
}
