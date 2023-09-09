import { useState, createContext, useContext } from 'react'

const globalContext = createContext()
export const useGlobalContext = () => useContext(globalContext)

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)
  const [submenuLeft, setSubmenuLeft] = useState(0)
  const [submenuTop, setSubmenuTop] = useState(0)
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setPageId(null)
    setIsSidebarOpen(false)
  }
  return (
    <globalContext.Provider
      value={{
        isSidebarOpen: isSidebarOpen,
        closeSidebar: closeSidebar,
        openSidebar: openSidebar,
        pageId: pageId,
        setPageId: setPageId,
        submenuLeft: submenuLeft,
        submenuTop: submenuTop,
        setSubmenuLeft: setSubmenuLeft,
        setSubmenuTop: setSubmenuTop,
      }}
    >
      {children}
    </globalContext.Provider>
  )
}

export default AppContext
