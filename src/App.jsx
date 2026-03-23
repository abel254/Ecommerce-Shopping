import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'

const App = () => {

  useEffect(() => {
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100,
    })
    Aos.refresh()
  })

  return (
    <div className='bg'>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>

      <h1 className='text-center py-3 mt-20 font-bold text-3xl'>Development in Progress...</h1>
    </div>
  )
}

export default App
