import React from 'react'
import Routes from 'routes'
import 'antd/dist/antd.css'
import { AuthProvider } from 'components/AuthProvider'

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  )
}

export default App
