import pages from './data'
import { AiFillCloseCircle } from 'react-icons/ai'
const Sidebar = () => {
  return (
    <aside className='side-bar'>
      <div className='sidebar-center'>
        <button className='close-sidebar'>
          <AiFillCloseCircle></AiFillCloseCircle>
        </button>
        <ul className='side-links'>
          {pages.map((item) => {
            const { page, pageId } = item
            return (
              <li className='links' key={pageId}>
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
