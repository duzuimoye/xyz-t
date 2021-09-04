import { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Routers from './routes'
import store from './redux/store'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a101b;
  min-height: 600px;
  min-width: 1200px;
  overflow: hidden;
`

const App = () => {
  useEffect(() => {
    // close global default context menu.
    document.oncontextmenu = () => false
  })

  return (
    <Provider store={store}>
      <AppDiv>
        <Routers />
      </AppDiv>
    </Provider>
  )
}

export default App
