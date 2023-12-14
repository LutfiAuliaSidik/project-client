import * as Icon from 'react-bootstrap-icons'
import './HeaderSection.css'
import profile from '../../../assets/kurumi.jpg'

const HeaderSection = () => {
  return (
    <>
      <header className='container header'>
        <div className='icons'>
          <Icon.TextLeft />
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
