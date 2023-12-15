import * as Icon from 'react-bootstrap-icons'
import FlexWrap from '../components/FlexWrap'
import CardInfo from '../components/ui/CardSection/CardSection'
import ListProduct from '../components/ui/ListProduct/ListProduct'
import ProductHistoryTable from '../components/ui/ProductHistoryTable/ProductHistoryTable'

const Home = () =>
{
  return (
    <>
      <FlexWrap>
        <CardInfo 
          title='total product'
          value='1.450'
          icons={ <Icon.BoxSeamFill/> }
        />
        <CardInfo 
          color='rgba(142, 185, 178, 1)'
          title='add product'
          value='+5'
          icons={ <Icon.PlusCircleFill/> }
          bgColor='rgba(142, 185, 178, .1)'
        />
      </FlexWrap>
      <ListProduct />
      {/* <ProductHistoryTable /> */}
    </> 
  )
}

export default Home
