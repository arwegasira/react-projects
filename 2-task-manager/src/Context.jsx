import { useState, createContext, useContext } from 'react'
const globalContext = createContext()
export const useGlobalContext = () => useContext(globalContext)
const AppContext = ({ children }) => {
  const [filter, setFilter] = useState('')
  return (
    <globalContext.Provider value={{ filter, setFilter }}>
      {children}
    </globalContext.Provider>
  )
}

export default AppContext
