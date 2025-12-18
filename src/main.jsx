import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='271310146970-c7ue7iqv6elq5sg6js3mu6o29kf6ucsf.apps.googleusercontent.com' >
        <ShareContext >
          <App />
        </ShareContext>

      </GoogleOAuthProvider>
    </BrowserRouter>

  </StrictMode>,
)
