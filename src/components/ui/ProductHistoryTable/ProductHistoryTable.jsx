import './ProductHistoryTable.css'
import * as Icon from 'react-bootstrap-icons'
import productImage from '../../../assets/kurumi.jpg'

const ProductHistoryTable = () => {
  return (
    <>
      <div className='container product-history-table'>
        <h1>history product</h1>
        <div className='wrapper product-table'>
          <table cellSpacing='0'>
            <thead>
              <tr>
                <th>no</th>
                <th>id</th>
                <th>product</th>
                <th>date</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-title='no'>1</td>
                <td data-title='id'>#123754</td>
                <td data-title='product'>
                  <div className='w-p'>
                    <img src={productImage} alt='' loading='lazy'/>
                    <p>tokisaki kurumi</p>
                  </div>
                </td>
                <td data-title='date'>14/12/2023 12:12</td>
                <td data-title='status' data-status='delete'><p className='status'>delete</p></td>
                <td data-title='action'><span className='icon'>{ <Icon.TrashFill /> }</span></td>
              </tr>
              <tr>
                <td data-title='no'>2</td>
                <td data-title='id'>#123754</td>
                <td data-title='product'>
                  <div className='w-p'>
                    <img src={ productImage } alt='' loading='lazy'/>
                    <p>tokisaki kurumi</p>
                  </div>
                </td>
                <td data-title='date'>14/12/2023 12:12</td>
                <td data-title='status' data-status='add'><p className='status'>add</p></td>
                <td data-title='action'><span className='icon'>{ <Icon.TrashFill /> }</span></td>
              </tr>
              <tr>
                <td data-title='no'>3</td>
                <td data-title='id'>#123754</td>
                <td data-title='product'>
                  <div className='w-p'>
                    <img src={productImage} alt='' loading='lazy'/>
                    <p>tokisaki kurumi</p>
                  </div>
                </td>
                <td data-title='date'>14/12/2023 12:12</td>
                <td data-title='status' data-status='update'><p className='status'>update</p></td>
                <td data-title='action'><span className='icon'>{ <Icon.TrashFill /> }</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductHistoryTable
