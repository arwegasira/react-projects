import { useState, createContext, useContext } from 'react'

const globalContext = createContext()
export const useGlobalContext = () => useContext(globalContext)

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <globalContext.Provider
      value={{
        isSidebarOpen: isSidebarOpen,
        closeSidebar: closeSidebar,
        openSidebar: openSidebar,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export default AppContext
