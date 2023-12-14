import * as Icon from 'react-bootstrap-icons'
import './HeaderSection.css'
import { useNavbarStatus } from '../../../stores/app'
import profile from '../../../assets/kurumi.jpg'

const HeaderSection = () => {

  const { status, setStatus } = useNavbarStatus((state) => ({
      status: state.status,
      setStatus: state.setStatus
  }))

  const handlerButton = () => !status ? setStatus(true) : setStatus(false)
  
  return (
    <>
      <header className='container header'>
        <div className='icons'>
          <Icon.TextLeft onClick={() => handlerButton()} />
          <h1>welcome back, kurumi</h1>
        </div>
        <div className='profile'>
          <img src={profile} alt='profile' loading='lazy' />
          <h1>kurumi</h1>
          <Icon.CaretDownFill/>
        </div>
      </header>
    </>
  )
}

export default HeaderSection
