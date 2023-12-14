import './SidebarSection.css'
import * as Icon from 'react-bootstrap-icons'
import { useNavbarStatus } from '../../../stores/app'

const SidebarSection = () =>
{
  const { status } = useNavbarStatus(state => ({ status: state.status }))
  const getUrlPath = document.baseURI.split('/')[3]

  return ( 
    <sidebar className={`container sidebar ${ status ? 'active' : ''}`}>
      <div className='wrapper sidebar-header'>
        <Icon.Grid1x2 />
        <h1>dashboard</h1>
      </div>
      <div className='wrapper sidebar-menu'>
        <h1>main menu</h1>
        <ul>
          <a href='/'><li>
            <Icon.GridFill/>
            <p>dashboard</p>
          </li></a>
          <a href='/product'><li>
            <Icon.BoxSeamFill/>
            <p>product</p>
          </li></a>
        </ul>
      </div>
    </sidebar>
  )
}

export default SidebarSection
