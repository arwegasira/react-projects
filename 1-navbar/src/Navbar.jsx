import pages from './data'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useGlobalContext } from './Context'
const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext()
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <button type='button' onClick={() => openSidebar()}>
          <FaBarsStaggered></FaBarsStaggered>
        </button>
        <ul className='nav-links'>
          {pages.map((link) => {
            const { page, pageId } = link
            return (
              <li key={pageId} className='link'>
                {page}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
