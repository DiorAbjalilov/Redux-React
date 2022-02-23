import React from 'react'
import store from './redux/store'
import CakeContent from './components/CakeContent'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer'

const App = () => {
  return (
    <Provider store={store}>
        <CakeContent/>
        <HookCakeContainer/>
    </Provider>
  )
}

export default App