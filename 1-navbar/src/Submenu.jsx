import subLinks from './data'
import { useGlobalContext } from './Context'
const Submenu = () => {
  const { pageId, submenuTop, submenuLeft } = useGlobalContext()
  const currentPage = subLinks.find((item) => item.pageId === pageId)

  return (
    <div
      className={pageId ? 'submenu show' : 'submenu'}
      style={{ top: submenuTop, left: submenuLeft }}
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
