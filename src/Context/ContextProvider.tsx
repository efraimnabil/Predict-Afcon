import { ReactNode, createContext, useContext } from "react";

const Context = createContext({});

interface IProps {
    children: ReactNode
}


const ContextProvider = ({children}: IProps) => {
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}

function useGlobalContext() {
  return useContext(Context);
}

export default ContextProvider
export { useGlobalContext }

