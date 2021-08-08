import { useState } from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Routers from './routes'
import Progress from './components/Progress/index'
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
  const [state, setState] = useState({
    isAnimating: false,
    key: 0
  })

  return (
    <Provider store={store}>
      <AppDiv>
        <Progress isAnimating={state.isAnimating} key={state.key} />
        <button type="submit"
          onClick={() => {
            setState((prevState: { isAnimating: boolean, key: number }) => ({
              isAnimating: !prevState.isAnimating,
              key: prevState.isAnimating ? prevState.key : prevState.key + 1
            }))
          }}
        >
          {state.isAnimating ? 'Stop' : 'Start'}
        </button>
        <Routers />
      </AppDiv>
    </Provider>
  )
}

export default App
