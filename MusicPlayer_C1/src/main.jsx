import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './pages/main_page/index.jsx'
import {GlobalStyle} from './globalstyle.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <MainPage />
  </React.StrictMode>,
)
