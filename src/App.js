import MessengerCustomerChat from 'react-messenger-customer-chat'

import Service from './components/Service'
import Header from './components/Header'
import SpecialOffer from './components/SpecialOffer'
import Offer from './components/Offer'
import Hours from './components/Hours'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Header />
      <Service />
      <SpecialOffer />
      <Offer />
      <Menu />
      <Hours />
      <div className='container'>
        <MessengerCustomerChat
          pageId='124009027931044'
          appId='742193349728923'
        />
      </div>
    </>
  )
}

export default App
