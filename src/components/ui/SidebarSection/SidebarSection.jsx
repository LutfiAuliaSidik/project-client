import './SidebarSection.css'
import * as Icon from 'react-bootstrap-icons'
import { useNavbarStatus } from '../../../stores/app'
import { NavLink } from 'react-router-dom'

const SidebarSection = () =>
{
  const { status } = useNavbarStatus(state => ({ status: state.status }))

  return ( 
    <sidebar className={`container sidebar ${ status ? 'active' : ''}`}>
      <div className='wrapper sidebar-header'>
        <Icon.Grid1x2 />
        <h1>dashboard</h1>
      </div>
      <div className='wrapper sidebar-menu'>
        <h1>main menu</h1>
        <ul>
          <NavLink to='/'>
            <li>
              <Icon.GridFill/>
              <p>dashboard</p>
            </li>
          </NavLink>
          <NavLink to='/product'>
            <li>
              <Icon.BoxSeamFill/>
              <p>product</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </sidebar>
  )
}

export default SidebarSection
