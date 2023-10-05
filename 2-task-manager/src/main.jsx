import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppContext from './Context.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppContext>
)
