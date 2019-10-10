import React, { Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Landing />
      </div>
    </Fragment>
  )
}

export default App
