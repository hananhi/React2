import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Hero from './Hero'
import NewsPage from './NewsPage'
import Card from './Card'
import Footer from './Footer'
import Data from './Data'


function App() {
  const [count, setCount] = useState(0)

  const style={
    
    height:' 100%',
    width: '100%'

    
}
  let ButtonText='Read more'

  return (
    
      <div>

      <Header/>
      <Hero/>

      <NewsPage id="news" src={'https://wallpapercave.com/wp/wp3203371.jpg'} style={style}>
        <Card title='Project Managment' description='description:how to manage efectivly your big projects' buttontext={ButtonText} />
        <Card title='Employee Development' description='description:how to manage efectivly your big projects' buttontext={ButtonText}/>
        <Card title='Customer Experience' description='description:how to manage efectivly your big projects' buttontext={ButtonText}/>
      </NewsPage>
  
  <Data src={'https://wallpapercave.com/wp/wp3203371.jpg'} style={style}/>
  <Footer/>
      </div>
     
  )
}

export default App
