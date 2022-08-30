import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './componentes/auth/auth.jsx'

import Router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </AuthProvider>
)
