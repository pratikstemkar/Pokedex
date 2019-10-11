import React, { Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

import store from './store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <div className="container">
          <Landing />
        </div>
      </Provider>
    </Fragment>
  )
}

export default App
