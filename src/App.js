import React from 'react'
import Navbar from './components/Navbar'
import Formula from './components/Formula'
import Footer from './components/Footer'
import Text from './components/Text'

export default function App() {

  return (
      <div className="container">
        <Navbar />
        <Formula />
        <Text />
        <Footer />
      </div>
  )
}

