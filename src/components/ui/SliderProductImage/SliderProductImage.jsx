import './SliderProductImage.css'
import productImage from '../../../assets/kurumi.jpg'
import * as Icon from 'react-bootstrap-icons'

const SliderProductImage = () =>
{

  return (
    <div className='container slider-image'>
      <div className='header-slider'>
        <Icon.ArrowLeft/>
      </div>
      <figure className='content-slider'>
        <img src={productImage} alt='' loading='lazy' /> 
        <figcaption>
          1/10
        </figcaption>
      </figure>
      <div className='footer-slider'>
        <p>2 variasi tersedia</p>
      </div>
    </div>
  )
}


export default SliderProductImage
