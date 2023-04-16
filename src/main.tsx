import './global.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Routing } from './Routing'
import { MainContext, MainContextData } from './context'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const [mainState, setState] = React.useState<MainContextData>({})

  return (
    <MainContext.Provider value={{ ...mainState, update: setState }}>
      <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </React.StrictMode>
    </MainContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
