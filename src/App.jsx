import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'



import Blog from './Blog/Blog'
import Berries from './components/Berries'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Pictures from './components/Pictures'
import Footer from './components/Footer'


// import Text from './components/Text'

// js environ
function App() {
  //  js environ


  // function Car() 

  return (
    <>
      {/* jsx environ */}
      {/* <Text/> */}



      <Blog />
      <Berries />
      <Aboutme />
      <Skills />
    
      <Pictures />
      <Footer />
      {/* <GreetUser name='Gift' title='Mrs.' />
      <GreetUser name='Mary' title='Miss.' /> */}
      {/* <GreetUser name='John' /> */} 
    </>
  )
}
// js environ
export default App
