import './SidebarSection.css'
import * as Icon from 'react-bootstrap-icons'
import { useNavbarStatus } from '../../../stores/app'
import { NavLink } from 'react-router-dom'

const SidebarSection = ({ children }) =>
{
  const { status, setStatus } = useNavbarStatus(state => ({ 
    status: state.status,
    setStatus: state.setStatus
  }))

  const navbarMainMenuItems = [
    {
      path : '/',
      icon : <Icon.GridFill/>,
      name : 'dashboard',
    },
    {
      path : '/product',
      icon : <Icon.BoxSeamFill/>,
      name : 'product',
    },
    {
      path : '/add-product',
      icon : <Icon.PlusCircleFill/>,
      name : 'add product',
    }
  ]

  const handlerButton = () => !status ? setStatus(true) : setStatus(false)

  return (
    <div className='container main-app'>
      <sidebar className={`container sidebar ${ status ? 'active' : ''}`}>
        <div className='wrapper sidebar-header'>
          <Icon.Grid1x2 />
          <h1>dashboard</h1>
        </div>
        <nav className='wrapper sidebar-menu'>
          <h1>main menu</h1>
          <ul className='main-menu'>
            {
              navbarMainMenuItems.map(menuMain => {
                return (
                  <NavLink to={menuMain.path}>
                    <li>  
                      { menuMain.icon }
                      <p>{ menuMain.name }</p>
                    </li>
                  </NavLink>
                ) 
              }) 
            }
          </ul>
          <ul className='menu-footer'>
            <li>
              <Icon.BoxArrowLeft />
              <p>log out</p>
            </li>
          </ul>
          <div className='icon-back' onClick={() => handlerButton()}>
            <Icon.ArrowBarLeft />
          </div>
        </nav>
      </sidebar>
      <main className='container main-page'>
        { children }
      </main>
    </div>
  )
}

export default SidebarSection
