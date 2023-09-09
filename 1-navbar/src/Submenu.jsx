import subLinks from './data'
import { useGlobalContext } from './Context'
const Submenu = () => {
  const { pageId, submenuTop, submenuLeft, setPageId } = useGlobalContext()
  const currentPage = subLinks.find((item) => item.pageId === pageId)

  const handleMouseLeave = (e) => {
    const { clientX, clientY } = e
    const { left, right, bottom } = e.target.getBoundingClientRect()
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }

  return (
    <div
      className={pageId ? 'submenu show' : 'submenu'}
      style={{ top: submenuTop, left: submenuLeft }}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <div className='submenu-center'>
        <h5>{currentPage?.page}</h5>
        <div className='submenu-links'>
          {currentPage?.links?.map((link) => {
            const { label, icon, url, id } = link
            return (
              <a href={url} key={id}>
                {icon} {label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Submenu
