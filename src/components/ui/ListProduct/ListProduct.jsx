import './ListProduct.css'
import productImage from '../../../assets/kurumi.jpg'
import { Link } from 'react-router-dom'

const ListProduct = () => {

  const dataProduct = [
    { 
      image: productImage,
      nama: 'Product 1 tokisaki kurumi',
      harga: '188.000,00'
    },
    { 
      image: productImage,
      nama: 'Product 2 tokisaki kurumi',
      harga: '180.000,00'
    },
    { 
      image: productImage,
      nama: 'Product 3 tokisaki kurumi',
      harga: '188.000,00'
    }
  ]

  const getSlugProduct = (index) => dataProduct[index].nama.replaceAll(' ', '-');
  

  const Product = () => {
    return dataProduct.map((product, index) => {
      return (
        <Link to={`/detail/${getSlugProduct(index)}`}>
          <div className='l-product'>
            <figure>
              <img src={ product.image } alt='' loading='lazy' />
              <figcaption>
                <h1>{ product.nama }</h1>
                <p>{ product.harga }</p>
              </figcaption>
            </figure>
          </div>
        </Link>
      )
    })
  }

  return (
    <section className='container list-product'>
      <Product />
    </section>
  )
}

export default ListProduct
