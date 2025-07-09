import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PageinationContextProvider } from './context/PageinationContextProvider.jsx'
import { DarkModeContextProvider } from './context/DarkModeContextProvider.jsx'
import {Provider} from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <PageinationContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PageinationContextProvider>
    </DarkModeContextProvider>
  </BrowserRouter>
  
)
