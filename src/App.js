import React from 'react'
import store from './redux/store'
import CakeContent from './components/CakeContent'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContent from './components/IceCreamContent'

const App = () => {
  return (
    <Provider store={store}>
        <CakeContent/>
        <HookCakeContainer/>
        <IceCreamContent/>
    </Provider>
  )
}

export default App