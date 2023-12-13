import './App.css'
import * as Icon from 'react-bootstrap-icons'
import HeaderSection from './components/ui/HeaderSection'
import CardSection from './components/ui/CardSection'
import FlexWrap from './components/FlexWrap'

const App = () => {

  return (
    <>
      <HeaderSection/>
      <FlexWrap>
        <CardSection 
          color='rgba(64, 79, 182, 1)'
          title='user'
          value='2'
          icons={ <Icon.PersonFill/> }
          bgColor='rgba(64, 79, 182, .1)'
        />
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
        <CardSection 
          color='rgba(255, 91, 159, 1)'
          title='delete product'
          value='-5'
          icons={ <Icon.TrashFill/> }
          bgColor='rgba(255, 91, 159, .1)'
        />
      </FlexWrap>
    </>
  )
}

export default App
