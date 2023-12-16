import SliderProductImage from '../components/ui/SliderProductImage/SliderProductImage'
import { useParams } from 'react-router-dom'

const DetailProduct = () =>
{
  const { slug } = useParams()

  return (
    <section>
      <SliderProductImage />
    </section>
  )
}

export default DetailProduct
