import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div className='bg'>
      <Navbar/>
      <Hero/>
      <Products/>

      <h2 className='text-center py-3'>Development in Progress...</h2>
    </div>
  )
}

export default App
