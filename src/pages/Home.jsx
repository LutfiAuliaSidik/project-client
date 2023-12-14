import * as Icon from 'react-bootstrap-icons'
import HeaderSection from '../components/ui/HeaderSection/HeaderSection'
import FlexWrap from '../components/FlexWrap'
import CardSection from '../components/ui/CardSection/CardSection'
import ListProduct from '../components/ui/ListProduct/ListProduct'

const Home = () =>
{
  return (
    <>
      <HeaderSection />
      <FlexWrap>
        <CardSection 
          title='total product'
          value='1.450'
          icons={ <Icon.BoxSeamFill/> }
        />
        <CardSection 
          color='rgba(142, 185, 178, 1)'
          title='add product'
          value='+5'
          icons={ <Icon.PlusCircleFill/> }
          bgColor='rgba(142, 185, 178, .1)'
        />
      </FlexWrap>
      <ListProduct />
    </> 
  )
}

export default Home
