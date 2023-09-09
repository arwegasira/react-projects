import pages from './data'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useGlobalContext } from './Context'
const Sidebar = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    setPageId,
    pageId,
    submenuLeft,
    submenuTop,
    setSubmenuLeft,
    setSubmenuTop,
  } = useGlobalContext()
  const handleMouseEnter = ({ e, pageId }) => {
    const { left, bottom, right, top } = e.target.getBoundingClientRect()
    setSubmenuLeft(right)
    setSubmenuTop(top)
    setPageId(pageId)
  }

  return (
    <aside className={isSidebarOpen ? 'side-bar show' : 'side-bar'}>
      <button className='close-sidebar' onClick={() => closeSidebar()}>
        <AiFillCloseCircle></AiFillCloseCircle>
      </button>
      <div className='sidebar-center'>
        <ul className='side-links'>
          {pages.map((item) => {
            const { page, pageId } = item
            return (
              <li
                className='links'
                key={pageId}
                onMouseEnter={(e) => handleMouseEnter({ e, pageId })}
              >
                {page}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar
