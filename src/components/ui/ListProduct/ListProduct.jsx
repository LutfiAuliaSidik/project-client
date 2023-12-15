import './ListProduct.css'
import productImage from '../../../assets/kurumi.jpg'

const ListProduct = () => {

  const dataProduct = [
    { 
      image: productImage,
      nama: 'Product 1 tokisaki kurumi lutfi aulia sidik',
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

  const Product = () => {
    return dataProduct.map(product => {
      return (
         <a href="">
          <div className='l-product'>
            <figure>
              <img src={ product.image } alt='' loading='lazy' />
              <figcaption>
                <h1>{ product.nama }</h1>
                <p>{ product.harga }</p>
              </figcaption>
            </figure>
          </div>
        </a>       
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
